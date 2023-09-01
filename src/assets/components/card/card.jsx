/**
 * a card for holding information
 *
 * @param {{name: string, description: string, link: string, imgURL: string}} properties
 * @returns HTML element containing information about a project
 */

function Card(properties) {
  const { name, description, link, imgURL } = properties;

  return (
    <div className="projectCard">
      <h2 className="projTitle">{name}</h2>
      <img className="projImg" src={imgURL} alt="" />
      <p className="projDescription">{description}</p>
      <a href={link}>Source code link</a>
    </div>
  );
}

export default Card;
