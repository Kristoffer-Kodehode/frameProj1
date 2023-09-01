import Card from "./assets/components/card/card";
import Layout from "./assets/layout/layout";
import projImg from "./assets/projImg1.jpeg";
import projImg2 from "./assets/projImg2.jpeg";
import "./index.css";

function App() {
  return (
    <>
      <Layout>
        <Card
          name="This project"
          imgURL={projImg}
          description='This "beautiful" project here'
          link="https://github.com/Kristoffer-Kodehode/frameProj1"
        ></Card>
        <Card
          name="Some other project"
          imgURL={projImg2}
          description="This other project"
          link="https://github.com/Kristoffer-Kodehode/frameProj1"
        ></Card>
        <Card
          name="Definetely not the same project"
          imgURL={projImg2}
          description="This absolutely-different-from-the-other-two project"
          link="https://github.com/Kristoffer-Kodehode/frameProj1"
        ></Card>
      </Layout>
    </>
  );
}

export default App;
