import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { getAlerts } from "../../redux/reducers/alerts";
import { getAdvices } from "../../redux/reducers/advices";
import { getTips } from "../../redux/reducers/tips";
import ContentDisplay from "../components/ContentDisplay";

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
      {alerts && <ContentDisplay title="Alertes" data={alerts} />}
      {advices && <ContentDisplay title="Advices" data={advices} />}
      {tips && <ContentDisplay title="Tips" data={tips} />}
    </div>
  );
}
