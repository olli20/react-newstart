 const Painting = (props) => {
  const { url, title, author, authorUrl, price } = props;
  return (<div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Author: <a href={authorUrl}>{author}</a>
    </p>
    <p>Prise: {price} credits</p>
    <p>Aviability</p>
    <button type="button">Add to basket</button>
  </div>);
};

export default Painting;