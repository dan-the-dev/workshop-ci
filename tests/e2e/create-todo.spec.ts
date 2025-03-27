import { test, expect } from '@playwright/test';
import fs from "node:fs/promises";
import path from "node:path";
import emptyData from "../testdata/empty.json";

const filePath = path.join(__dirname, "..", "..", "data", "todos.json");
test.beforeAll(async () => {
  console.log('beforeAll', filePath, emptyData)
  await fs.writeFile(filePath, JSON.stringify(emptyData));
});

test('create/edit/delete todo', async ({ page }) => {
  // create
  await page.goto('http://localhost:3000/');
  await page.getByTestId('add-todo').click();
  await expect(page.getByTestId('todo-text-add')).toBeVisible();
  await page.getByTestId('todo-text-add').fill('TODO TEST 1');
  await page.getByTestId('save-add-todo').click();
  await expect(page.getByTestId('todo-name-label')).toBeVisible();
  // edit
  await page.getByTestId('edit-todo').first().click();
  await expect(page.getByTestId('todo-text-edit')).toBeVisible();
  await page.getByTestId('todo-text-edit').fill('TODO TEST 2');
  await page.getByTestId('save-edit-todo').click();
  await expect(page.getByTestId('todo-name-label')).toBeVisible();
  // delete
  await page.getByTestId('delete-todo').first().click();
  await expect(page.getByTestId('delete-todo-confirm')).toBeVisible();
  await page.getByTestId('delete-todo-confirm').click();
  await expect(page.getByTestId('todo-name-label')).toHaveCount(0);
});

