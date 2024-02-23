import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import Alertes from "../components/Alertes";
import { getAlerts } from "../../redux/reducers/alerts";
import Advices from "../components/Advices";
import { getAdvices } from "../../redux/reducers/advices";

export default function Home() {
  const dispatch = useAppDispatch();
  const alerts = useAppSelector((state) => state.alerts.alerts);
  const advices = useAppSelector((state) => state.advices.advices);

  useEffect(() => {
    dispatch(getAlerts());
    dispatch(getAdvices());
  }, []);

  return (
    <div className="main w-4/6 m-auto">
      {alerts && <Alertes alerts={alerts} />}
      {advices && <Advices advices={advices} />}
    </div>
  );
}
