import UrlShort from "./UrlShort";

export const Home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <UrlShort showAlert={showAlert}/>
    </div>
  );
};
