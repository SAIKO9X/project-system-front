import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateProjectForm } from "../Project/CreateProjectForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/Redux/Auth/Action";

export const NavBar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p onClick={() => navigate("/")} className="cursor-pointer font-bold">
          Gerenciamento de Projetos
        </p>

        <Dialog className="font-semibold">
          <DialogTrigger>
            <Button variant="ghost">Novo Projeto</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>Criar um Novo Projeto</DialogHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>

        <Button onClick={() => navigate("/upgrade_plan")} variant="ghost">
          Planos
        </Button>
      </div>

      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button size="icon" className="rounded-full ">
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <p>{auth.user?.fullName}</p>
      </div>
    </div>
  );
};
