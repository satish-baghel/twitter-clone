import React from "react"
import { Col, Row } from "reactstrap"
import { Avatar, Mention } from "../../Atom"

const useDebounce = (fn, delay) => {
  const { current } = React.useRef({ fn, timer: null })
  React.useEffect(() => {
    current.fn = fn
  }, [fn])
  return React.useCallback(
    (...args) => {
      if (current.timer) {
        clearTimeout(current.timer)
      }
      current.timer = setTimeout(() => {
        current.fn(...args)
      }, delay)
    },
    [delay]
  )
}

const AddPost = () => {
  const [users, setUsers] = React.useState([])

  const loadGithubUsers = useDebounce((key) => {
    if (!key) {
      return
    }

    fetch(`https://api.github.com/search/users?q=${key}`)
      .then((res) => res.json())
      .then(({ items = [] }) => {
        setUsers(items.slice(0, 10))
        // setLoading(false)
      })
  }, 800)
  const onSearch = (text) => {
    loadGithubUsers(text)
  }

  let options = users.map(({ login, avatar_url: avatar }) => ({
    key: login,
    value: login,
    className: "dynamic-option",
    label: (
      <>
        <img src={avatar} alt={login} />
        <span>{login}</span>
      </>
    ),
  }))

  return (
    <Row className="mt-3">
      <Col md="2">
        <Avatar />
      </Col>
      <Col md="10">
        <Mention
          prefix={["@", "#"]}
          placement="bottom"
          onSearch={onSearch}
          rows={3}
          options={options}
        />
      </Col>
    </Row>
  )
}

export default AddPost
