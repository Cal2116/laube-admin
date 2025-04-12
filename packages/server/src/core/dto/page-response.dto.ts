export class PageResponseDto {
  private items: any
  private total: number

  constructor(items: any, total: number) {
    this.items = items
    this.total = total
  }
}
