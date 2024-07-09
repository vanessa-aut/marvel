import { test, expect } from '@playwright/test'

const LOCAL_API_RESPONSE = {
  total: 2,
  results: [
    {
      id: 1011334,
      name: 'A_CHARACTER_NAME',
      description: '',
      modified: '2014-04-29T14:18:17-0400',
      thumbnail: {
        path: 'AN_IRRELEVANT_IMG_URL',
        extension: 'jpg',
      },
      resourceURI: 'A_IRRELEVANT_URI',
      comics: {
        available: 2,
        collectionURI: 'AN_IRRELEVANT_COLLECTION_URI',
        items: [
          {
            resourceURI: 'AN_IRRELEVANT_COMIC_URL',
            name: 'A_COMIC_NAME',
          },
          {
            resourceURI: 'ANOTHER_IRRELEVANT_COMIC_URL',
            name: 'ANOTHER_COMIC_NAME',
          },
        ],
        returned: 2,
      },
      series: {
        available: 2,
        collectionURI: 'AN_IRRELEVANT_COLLECTION_URI',
        items: [
          {
            resourceURI: 'AN_IRRELEVANT_SERIES_URL',
            name: 'A_SERIES_NAME',
          },
          {
            resourceURI: 'ANOTHER_IRRELEVANT_SERIES_URL',
            name: 'ANOTHER_SERIES_NAME',
          },
        ],
        returned: 2,
      },
      stories: {
        available: 2,
        collectionURI: 'AN_IRRELEVANT_COLLECTION_URI',
        items: [
          {
            resourceURI: 'AN_IRRELEVANT_STORY_URL',
            name: 'A_STORY_NAME',
          },
          {
            resourceURI: 'ANOTHER_IRRELEVANT_STORY_URL',
            name: 'ANOTHER_STORY_NAME',
          },
        ],
        returned: 2,
      },
      events: {
        available: 1,
        collectionURI: 'AN_IRRELEVANT_COLLECTION_URI',
        items: [
          {
            resourceURI: 'AN_IRRELEVANT_EVENT_URL',
            name: 'A_EVENT_NAME',
          },
        ],
        returned: 1,
      },
    },
    {
      id: 333333,
      name: 'ANOTHER_CHARACTER_NAME',
      description: '',
      modified: '2014-04-29T14:18:17-0400',
      thumbnail: {
        path: 'AN_IRRELEVANT_IMG_URL',
        extension: 'jpg',
      },
      resourceURI: 'A_IRRELEVANT_URI',
      comics: {
        available: 2,
        collectionURI: 'AN_IRRELEVANT_COLLECTION_URI',
        items: [
          {
            resourceURI: 'AN_IRRELEVANT_COMIC_URL',
            name: 'A_COMIC_NAME',
          },
          {
            resourceURI: 'ANOTHER_IRRELEVANT_COMIC_URL',
            name: 'ANOTHER_COMIC_NAME',
          },
        ],
        returned: 2,
      },
      series: {
        available: 2,
        collectionURI: 'AN_IRRELEVANT_COLLECTION_URI',
        items: [
          {
            resourceURI: 'AN_IRRELEVANT_SERIES_URL',
            name: 'A_SERIES_NAME',
          },
          {
            resourceURI: 'ANOTHER_IRRELEVANT_SERIES_URL',
            name: 'ANOTHER_SERIES_NAME',
          },
        ],
        returned: 2,
      },
      stories: {
        available: 2,
        collectionURI: 'AN_IRRELEVANT_COLLECTION_URI',
        items: [
          {
            resourceURI: 'AN_IRRELEVANT_STORY_URL',
            name: 'A_STORY_NAME',
          },
          {
            resourceURI: 'ANOTHER_IRRELEVANT_STORY_URL',
            name: 'ANOTHER_STORY_NAME',
          },
        ],
        returned: 2,
      },
      events: {
        available: 1,
        collectionURI: 'AN_IRRELEVANT_COLLECTION_URI',
        items: [
          {
            resourceURI: 'AN_IRRELEVANT_EVENT_URL',
            name: 'A_EVENT_NAME',
          },
        ],
        returned: 1,
      },
    },
  ],
}

test.describe('Home page', () => {
  test('loads and shows a characters list', async ({ page }) => {
    await page.route('**/api/characters?**', async route => {
      await route.fulfill({ json: LOCAL_API_RESPONSE })
    })

    await page.goto('/')

    await expect(page).toHaveTitle(/Marvel App/)
    await expect(page.getByText('A_CHARACTER_NAME')).toBeVisible()
    await expect(page.getByText('ANOTHER_CHARACTER_NAME')).toBeVisible()
  })
})
