import FollowList from "../../components/FollowList";
import MainScreen from "../../components/MainScreen";

function Followers() {
  return (
    <MainScreen>
      <FollowList listType="followers" />
    </MainScreen>
  );
}

export default Followers;
