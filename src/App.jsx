import Card from "./assets/components/card/card";
import Layout from "./assets/layout/layout";
import "./index.css";

function App() {
  return (
    <>
      <Layout>
        <Card
          name="This project"
          imgURL="src/assets/projImg1.PNG"
          description='This "beautiful" project here'
          link="https://github.com/Kristoffer-Kodehode/frameProj1"
        ></Card>
        <Card
          name="Some other project"
          imgURL="src/assets/projImg1.PNG"
          description="This other project"
          link="https://github.com/Kristoffer-Kodehode/frameProj1"
        ></Card>
        <Card
          name="Definetely not this project"
          imgURL="src/assets/projImg1.PNG"
          description="This absolutely different-from-the-other-two project"
          link="https://github.com/Kristoffer-Kodehode/frameProj1"
        ></Card>
      </Layout>
    </>
  );
}

export default App;
