'use server'

import { revalidatePath } from "next/cache";

const sleep = ms => new Promise(r => setTimeout(r, ms));

let data = ['阅读', '写作', '冥想']
 
export async function findToDos() {
  return data
}

export async function createToDo(todo) {
  await sleep(500)

  if (Math.random() < 0.5) {
    return '创建失败'
  }

  data.push(todo)
  revalidatePath("/form");
}
