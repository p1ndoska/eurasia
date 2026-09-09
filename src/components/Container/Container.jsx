function Container({ children, className = '' }) {
  const classes = className ? `container ${className}` : 'container'

  return <div className={classes}>{children}</div>
}

export default Container
