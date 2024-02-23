import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import Alertes from "../components/Alertes";
import { getAlerts } from "../../redux/reducers/alerts";

export default function Home() {
  const dispatch = useAppDispatch();
  const alerts = useAppSelector((state) => state.alerts.alerts);

  useEffect(() => {
    dispatch(getAlerts());
  }, []);

  return (
    <div className="main w-4/6 m-auto">
      {alerts && <Alertes alerts={alerts} />}
    </div>
  );
}
