import Card from "./assets/components/card/card";
import Layout from "./assets/layout/layout";
import { projects } from "./assets/data/data";

import "./index.css";

function App() {
  return (
    <>
      <Layout>
        {projects.map((project) => {
          return (
            <div className="projectCard" key={project.id}>
              <Card
                name={project.name}
                description={project.description}
                imgURL={project.imgURL}
                link={project.link}
              ></Card>
            </div>
          );
        })}
      </Layout>
    </>
  );
}

export default App;
