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

interface NewBirthdayer {
  name: string;
  birthday: Date;
  confettis: string;
}

export interface SearchResult {
  id: string;
}

export const createBirthdayer = async (data: NewBirthdayer) => {
  try {
    const res = await pb.collection("birthdayer").create({
      ...data,
      buttonLabel: "나도 축하해주기 🥳",
      celebrationCount: 0,
    });
    return {
      type: "success",
      id: res.id,
    };
  } catch {
    return {
      type: "error",
      message: "이미 존재하는 이름입니다.",
    };
  }
};

export const getBirthdayer = async (id: string) =>
  await pb.collection("birthdayer").getOne<Birthdayer>(id);

export const addConfetti = async (id: string) =>
  await pb.collection("birthdayer").update(id, {
    "celebrationCount+": 1,
  });

export const findBirthdayer = async (name: string, birthday: Date) =>
  await pb.collection("birthdayer").getFullList<SearchResult>({
    filter: pb.filter("name = {:name} && (birthday = {:birthday})", {
      name,
      birthday,
    }),
  });
