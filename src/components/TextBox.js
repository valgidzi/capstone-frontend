import React from 'react';
import styled from 'styled-components';
import { Editor } from 'slate-react';
import Icon from 'react-icons-kit';
import { bold } from 'react-icons-kit/feather/bold';
import { italic } from 'react-icons-kit/feather/italic';
import { underline } from 'react-icons-kit/feather/underline';
import { isKeyHotkey } from 'is-hotkey';
import Html from 'slate-html-serializer';

const Container = styled.div`
  margin: 15px;
  border: 1px solid lightgrey;
  border-radius: 2px;

  background-color: white;
  padding: 10px;
`;

export const Button = styled.span`
  cursor: pointer;
  color: ${props =>
  props.reversed
  ? props.active ? 'white' : '#aaa'
  : props.active ? 'black' : '#ccc'};
`;

export const Menu = styled.div`
  display: inline-block;
  margin-left: 15px;
;`

export const Toolbar = styled(Menu)`
  position: relative;
  padding: 1px 18px 17px;
  margin: 0 -20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`;

const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
}

const rules = [
  {
    deserialize(el, next) {
      if (el.tagName.toLowerCase() === 'p') {
        return {
          object: 'block',
          type: 'paragraph',
          data: {
            className: el.getAttribute('class'),
          },
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object === 'block' && obj.type === 'paragraph') {
        return <p className={obj.data.get('className')}>{children}</p>
      }
    },
  },
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()]
      if (type) {
        return {
          object: 'mark',
          type: type,
          nodes: next(el.childNodes)
        }
      }
    },
    serialize(obj, children) {
      if (obj.object === 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>
          case 'italic':
            return <em>{children}</em>
          case 'underlined':
            return <u>{children}</u>
        }
      }
    },
  },
]

const html = new Html({ rules })

const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')

export default class TextBox extends React.Component {
  state = {
    value: html.deserialize(this.props.text),
  }

  schema = {
    marks: {
      highlight: {
        isAtomic: true,
      },
    },
  }

  hasMark = type => {
    const { value } = this.state
    return value.activeMarks.some(mark => mark.type === type)
  }

  onSaveClick = () => {
    const value = this.state.value
    const serializedText = html.serialize(value)
    console.log(serializedText);
    this.props.onSaveClickCallback(serializedText)
  }

  ref = editor => {
    this.editor = editor
  }
  render() {
    return (
      <Container>
        <Toolbar>
          {this.renderMarkButton('bold', bold)}
          {this.renderMarkButton('italic', italic)}
          {this.renderMarkButton('underlined', underline)}
          <div>
            <input
              type="search"
              placeholder="Search the text..."
              onChange={this.onInputChange}
            />
          </div>
        </Toolbar>
        <Editor
          spellCheck
          autoFocus
          placeholder="Enter some rich text..."
          ref={this.ref}
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderMark={this.renderMark}
          schema={this.schema}
        />
        <button type="button" onClick={this.onSaveClick}>Save Handout</button>
      </Container>
    )

  }
  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type)

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <Icon icon={icon} />
      </Button>
    )
  }

  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>
      case 'italic':
        return <em {...attributes}>{children}</em>
      case 'underlined':
        return <u {...attributes}>{children}</u>
      case 'highlight':
        return (
          <span {...attributes} style={{ backgroundColor: '#ffeeba' }}>
            {children}
          </span>
        )
      default:
        return next()
    }
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  onKeyDown = (event, editor, next) => {
    let mark

    if (isBoldHotkey(event)) {
      mark = 'bold'
    } else if (isItalicHotkey(event)) {
      mark = 'italic'
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined'
    } else {
      return next()
    }

    event.preventDefault()
    editor.toggleMark(mark)
  }

  onClickMark = (event, type) => {
    event.preventDefault()
    this.editor.toggleMark(type)
  }

  onInputChange = event => {
    const { editor } = this
    const { value } = editor
    const string = event.target.value
    const texts = value.document.getTexts()
    const decorations = []

    texts.forEach(node => {
      const { key, text } = node
      const parts = text.split(string)
      let offset = 0

      parts.forEach((part, i) => {
        if (i !== 0) {
          decorations.push({
            anchor: { key, offset: offset - string.length },
            focus: { key, offset },
            mark: { type: 'highlight' },
          })
        }

        offset = offset + part.length + string.length
      })
    })

    editor.withoutSaving(() => {
      editor.setDecorations(decorations)
    })
  }

}
