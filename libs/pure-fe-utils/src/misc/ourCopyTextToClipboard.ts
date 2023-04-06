const ourCopyTextToClipboard = (text: string) => navigator.clipboard.writeText(text).then().catch();

export default ourCopyTextToClipboard;
