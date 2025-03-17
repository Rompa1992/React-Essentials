
export default function CoreConcept({ title, description, image }) { // Object destructuring is used to extract the properties from the props object. ({ title, description, image })
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
 }