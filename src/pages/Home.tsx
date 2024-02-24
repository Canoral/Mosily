import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { getAlerts } from "../../redux/reducers/alerts";
import { getAdvices } from "../../redux/reducers/advices";
import { getTips } from "../../redux/reducers/tips";
import Alertes from "../components/Alertes";
import Advices from "../components/Advices";
import Tips from "../components/Tips";

export default function Home() {
  const dispatch = useAppDispatch();
  const alerts = useAppSelector((state) => state.alerts.alerts);
  const advices = useAppSelector((state) => state.advices.advices);
  const tips = useAppSelector((state) => state.tips.tips);

  useEffect(() => {
    dispatch(getAlerts());
    dispatch(getAdvices());
    dispatch(getTips());
  }, []);

  return (
    <div className="main">
      {alerts && <Alertes alerts={alerts} />}
      {advices && <Advices advices={advices} />}
      {tips && <Tips tips={tips} />}
    </div>
  );
}
