import NameSearch from "../components/NameSearch";
import IdSearch from "../components/IdSearch";

const Home = () => {
  return(
    <div>
      <NameSearch />
      <IdSearch />
      <div id="reportingArea"></div>
    </div>
  );
}

export default Home;