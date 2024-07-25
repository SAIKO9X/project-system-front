import {
  fetchUserSubscription,
  upgradeSubscription,
} from "@/Redux/Subscription/Action";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export const UpgradeSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subscription } = useSelector((store) => store.subscription);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("session_id");
  const planType = queryParams.get("planType");

  useEffect(() => {
    if (planType) {
      dispatch(upgradeSubscription(planType));
      dispatch(fetchUserSubscription());
    }
  }, [planType, dispatch]);

  return (
    <div className="flex items-center text-center justify-center">
      <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <p className="text-xl">Plano Atualizado com Sucesso</p>
          <CheckCircledIcon className="h-6 w-6 text-green-500" />
        </div>

        <p className="text-xl">{subscription?.planType}</p>

        <div className="flex gap-2">
          <p>Data de início: {subscription?.subscriptionStartDate}</p>
          <p>Fim da assinatura: {subscription?.subscriptionEndDate}</p>
        </div>

        <Button onClick={() => navigate("/")}>Voltar</Button>
      </Card>
    </div>
  );
};
