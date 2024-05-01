const Box = props => {
  const {contentName, contentText} = props
  return (
    <div className='contentName'>
      <p>{contentText}</p>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <h1 classname='heading'>Boxes</h1>
    <Box contentText='Small' contentName='small-box' />
    <Box contentText='Medium' contentName='medium-box' />
    <Box contentText='Large' contentName='large-box' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
