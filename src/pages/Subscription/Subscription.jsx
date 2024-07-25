import { useSelector } from "react-redux";
import { SubscriptionCard } from "./SubscriptionCard";

const paidPlan = [
  "Adicionar projetos ilimitados",
  "Acesso ao chat ao vivo",
  "Adicionar membros ilimitados à equipe",
  "Relatórios Avançados",
  "Apoio Prioritário",
  "Opções de personalização",
  "Suporte à integração",
  "Segurança avançada",
  "Treinamento e Recursos",
  "Controle de acesso",
  "Fluxos de trabalho personalizados",
];

const annualPlan = [
  "Adicionar projetos ilimitados",
  "Acesso ao chat ao vivo",
  "Adicionar membros ilimitados à equipe",
  "Relatórios Avançados",
  "Apoio Prioritário",
  "Tudo que o plano mensal tem",
];

const freePlan = [
  "Adicionar apenas 3 projetos",
  "Gerenciamento Básico de Tarefas",
  "Colaboração em Projeto",
  "Relatórios Básicos",
  "Notificações por e-mail",
  "Controle de acesso básico",
];

export const planTypeTranslations = {
  FREE: "Gratuito",
  MONTHLY: "Por Mês",
  ANNUALLY: "Por Ano",
};

export const Subscription = () => {
  const { subscription } = useSelector((store) => store);

  console.log(subscription);

  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-14 text-center">Preços</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard
          data={{
            planName: "Plano Básico",
            features: freePlan,
            planType: "FREE",
            price: 0 + " R$",
            buttonName:
              subscription.userSubscription?.plantype === "FREE"
                ? "Plano Atual"
                : "Assinar Plano",
          }}
          isCurrentPlan={subscription.userSubscription?.plantype === "FREE"}
        />
        <SubscriptionCard
          data={{
            planName: "Plano Mensal",
            features: paidPlan,
            planType: "MONTHLY",
            price: 20 + " R$",
            buttonName:
              subscription.userSubscription?.plantype === "MONTHLY"
                ? "Plano Atual"
                : "Assinar Plano",
          }}
          isCurrentPlan={subscription.userSubscription?.plantype === "MONTHLY"}
        />
        <SubscriptionCard
          data={{
            planName: "Plano Anual",
            features: annualPlan,
            planType: "ANNUALLY",
            price: 168 + " R$",
            buttonName:
              subscription.userSubscription?.plantype === "ANNUALLY"
                ? "Plano Atual"
                : "Assinar Plano",
          }}
          isCurrentPlan={subscription.userSubscription?.plantype === "ANNUALLY"}
        />
      </div>
    </div>
  );
};
