import * as React from 'react'

function Loading({text='Loading'}){
  const [content, setContent] = React.useState(text)

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setContent((c) => {
        const dots = c.slice(text.length)
        if(dots.length<4){
          return c+'.'
        }else {
          return text
        }
      })
    }, 300)

    return () => clearInterval(intervalId)
  }, [text])

  return <p className="text-center"><b>{content}</b></p>
}

export default Loading