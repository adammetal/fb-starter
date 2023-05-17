function Error(props) {
  const children = props.children;
  const className = props.className;
  // const { children } = props;

  return (
    <div className={className}>
      <div className="alert alert-danger">{children}</div>
    </div>
  );
}

export default Error;
