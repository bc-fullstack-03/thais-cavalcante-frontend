import FollowList from "../../components/FollowList";
import MainScreen from "../../components/MainScreen";

function Following() {
  return (
    <MainScreen>
      <FollowList listType="following" />
    </MainScreen>
  );
}

export default Following;
