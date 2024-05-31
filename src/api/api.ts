import Pocketbase from "pocketbase";

const pb = new Pocketbase(import.meta.env.VITE_API_BASE);

export interface Birthdayer {
  id: string;
  name: string;
  birthday: string;
  buttonLabel: string;
  confettis: number;
}

export const getBirthdayer = async (id: string) =>
  await pb.collection("birthdayer").getOne<Birthdayer>(id);

export const addConfetti = async (id: string) =>
  await pb.collection("birthdayer").update(id, {
    "confettis+": 1,
  });
