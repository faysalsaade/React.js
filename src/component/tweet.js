function Tweet(props) {
  const { name, message, likes } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>{likes}</h3>
    </div>
  );
}
export default Tweet;
