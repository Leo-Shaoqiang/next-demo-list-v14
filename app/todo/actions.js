'use server'

import { revalidatePath } from "next/cache";

const sleep = ms => new Promise(r => setTimeout(r, ms));

let data = ['阅读', '写作', '冥想']

export async function findToDos() {
    return data
}

export async function createToDo(formData) {
    try {
        await sleep(2500)
        throw new Error('error')
        const todo = formData.get('todo')
        data.push(todo)
    } catch (error) {
        return { error: 'something is wrong' }
    } finally {
        revalidatePath("/todo");
    }
}

