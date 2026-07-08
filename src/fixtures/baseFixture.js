import { test as base }
from '@playwright/test';

import { PageManager }
from '../managers/PageManager.js';

export const test = base.extend({

    pages: async ({ page }, use) => {

        const pageManager =
            new PageManager(page);

        await use(pageManager);
    }
});

export const expect = test.expect;