/**
 * a card for holding information
 *
 * @param {{name: string, description: string, link: string, imgURL: string}} properties
 * @returns HTML element containing information about a project
 */

function Card(properties) {
  const { name, description, link, imgURL } = properties;

  return (
    <>
      <h1 className="proj-title">{name}</h1>
      <img src={imgURL} alt="" />
      <p className="proj-description">{description}</p>
      <a href={link}>Source code link</a>
    </>
  );
}

export default Card;
