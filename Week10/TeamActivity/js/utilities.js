
/**
 * Get the JSON from an endpoint
 *
 * @param {string} url The url to get the data from
 * @returns parsed JSON response
 * @throws Error if it's a bad response or something else fails
 */
export const getJSON = async (url) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw Error(response.statusText);

  } catch (e) {
    console.error(e);
  }
};

/**
 * Get the current position using the navigator API
 *
 * @param {PositionOptions} options
 * @returns Promise
 */
export const getLocation = (options) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

