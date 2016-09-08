declare interface ISpfxMultipleWebparts2Strings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'spfxMultipleWebparts2Strings' {
  const strings: ISpfxMultipleWebparts2Strings;
  export = strings;
}
