import Pocketbase from "pocketbase";

const pb = new Pocketbase(import.meta.env.VITE_API_BASE);

export interface Birthdayer {
  id: string;
  name: string;
  birthday: string;
  confettis: string;
  buttonLabel: string;
  celebrationCount: number;
}

export interface NewBirthdayer
  extends Omit<
    Birthdayer,
    "id" | "birthday" | "buttonLabel" | "celebrationCount"
  > {
  birthday: Date;
}

export const createBirthdayer = async (data: NewBirthdayer) =>
  await pb.collection("birthdayer").create({
    ...data,
    buttonLabel: "나도 축하해주기 🥳",
    celebrationCount: 0,
  });

export const getBirthdayer = async (id: string) =>
  await pb.collection("birthdayer").getOne<Birthdayer>(id);

export const addConfetti = async (id: string) =>
  await pb.collection("birthdayer").update(id, {
    "celebrationCount+": 1,
  });
