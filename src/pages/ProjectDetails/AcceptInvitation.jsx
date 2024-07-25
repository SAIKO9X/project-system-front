import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const AcceptInvitation = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAcceptInvitation = () => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");

    dispatch(AcceptInvitation({ token, navigate }));
  };
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <h1 className="py-5 font-semibold text-xl">
        você foi convidado para fazer parte do projeto
      </h1>
      <Button onCLick={handleAcceptInvitation}>Aceitar Convite</Button>
    </div>
  );
};
