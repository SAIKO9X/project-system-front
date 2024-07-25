import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { InviteUserForm } from "./InviteUserForm";
import { IssueList } from "./IssueList";
import { ChatBox } from "./ChatBox";
import { useEffect } from "react";
import { fetchProjectById } from "@/Redux/Project/Action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ProjectDetails = () => {
  const handleProjectInvitation = () => {};
  const dispatch = useDispatch();
  const { id } = useParams();
  const { project } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, [id, dispatch]);

  if (!project.projectDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5 text-white">
                {project.projectDetails.name}
              </h1>

              <div className="space-y-5 pb-10 text-sm">
                <p className="w-full md:max-w-lg lg:max-w-xl">
                  {project.projectDetails.description}
                </p>
                <div className="flex">
                  <p className="w-36">Lider do Projeto:</p>
                  <p> {project.projectDetails.owner.fullName}</p>
                </div>

                <div className="flex items-center">
                  <p className="w-36">Membros: </p>
                  <div className="flex items-center gap-2">
                    {project.projectDetails.team.map((item) => (
                      <Avatar className="cursor-pointer" key={item}>
                        <AvatarFallback>{item.fullName[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button
                          onClick={handleProjectInvitation}
                          size="sm"
                          variant="outline"
                          className="ml-2 flex items-center  justify-center gap-1"
                        >
                          <span>convidar</span>
                          <PlusIcon />
                        </Button>
                      </DialogClose>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>Convidar Usuário</DialogHeader>
                      <InviteUserForm></InviteUserForm>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex">
                  <p className="w-36">Categoria:</p>
                  <p> {project.projectDetails.category}</p>
                </div>

                <div className="flex">
                  <p className="w-36">Status:</p>
                  <Badge className="rounded-full">em progresso</Badge>
                </div>
              </div>

              <section>
                <p className="py-5 border-b text-lg -tracking-wider">Tarefas</p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                  <IssueList status="pendente" title="A fazer" />
                  <IssueList status="em progresso" title="Em Progresso" />
                  <IssueList status="pronto" title="Pronto" />
                </div>
              </section>
            </div>
          </ScrollArea>
          <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
            <ChatBox />
          </div>
        </div>
      </div>
      ;
    </>
  );
};
