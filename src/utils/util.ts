export const isNumber = (value: string | number): boolean => {
  return value != null && value !== "" && !isNaN(Number(value.toString()));
};

export const convertToLink = (inputText: string, isWhite: boolean) => {
  const color = isWhite ? "wee-text-white" : "";
  let replacedText;
  // URLs starting with http://, https://, or ftp://
  /* eslint-disable no-useless-escape */
 const replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = inputText.replace(
    replacePattern1,
    '<a class="link external ' + color + '" href="$1" target="_blank">$1</a>'
  );

  // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  const replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(
    replacePattern2,
    '$1 <a class="link external ' +
      color +
      '" href="http://$2" target="_blank">$2</a>'
  );

  // Change email addresses to mailto:: links.
  const replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(
    replacePattern3,
    '<a class="link external ' + color + '" href="mailto:$1">$1</a>'
  );

  return replacedText;
};
