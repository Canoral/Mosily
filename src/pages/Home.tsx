import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import Alertes from "../components/Alertes";
import { getAlerts } from "../../redux/reducers/alerts";
import Advices from "../components/Advices";
import { getAdvices } from "../../redux/reducers/advices";
import Tips from "../components/Tips";
import { getTips } from "../../redux/reducers/tips";

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
    <div className="main w-4/6 m-auto mb-20">
      {alerts && <Alertes alerts={alerts} />}
      {advices && <Advices advices={advices} />}
      {tips && <Tips tips={tips} />}
    </div>
  );
}
