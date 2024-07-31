import axios from "axios"

type GoogleBooksResponse = {
    kind: string;
    totalItems: number;
    items: BookVolume[];
  }
  
  type BookVolume = {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo?: SearchInfo;
  }
  
  type VolumeInfo = {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  }
  
  type IndustryIdentifier = {
    type: string;
    identifier: string;
  }
  
  type ReadingModes = {
    text: boolean;
    image: boolean;
  }
  
  type PanelizationSummary = {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  }
  
  type ImageLinks = {
    smallThumbnail: string;
    thumbnail: string;
  }
  
  type SaleInfo = {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: Price;
    retailPrice: Price;
    buyLink: string;
    offers: Offer[];
  }
  
  type Price = {
    amount: number;
    currencyCode: string;
  }
  
  type Offer = {
    finskyOfferType: number;
    listPrice: MicroPrice;
    retailPrice: MicroPrice;
  }
  
  type MicroPrice = {
    amountInMicros: number;
    currencyCode: string;
  }
  
  type AccessInfo = {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: EpubInfo;
    pdf: PdfInfo;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  }
  
  type EpubInfo = {
    isAvailable: boolean;
    acsTokenLink?: string;
  }
  
  type PdfInfo = {
    isAvailable: boolean;
  }
  
  type SearchInfo = {
    textSnippet: string;
  }

  export type Book = {
    id: string;
    title: string;
    authors: string[];
    description: string;
    thumbnail? : string; 
  }

  async function fetchGoogleBooks(query: string): Promise<Book[]> {
    try {
        const response = await axios.get<GoogleBooksResponse>(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const books = response.data.items.map((book) : Book => ({
            id : book.id,
            title : book.volumeInfo.title,
            authors : book.volumeInfo.authors ?? [],
            description : book.volumeInfo.description ?? "No description available",
            thumbnail : book.volumeInfo.imageLinks?.thumbnail ?? ""
        }))
        return books;
    } catch (error) {
        console.error("Error fetching data from Google Books API", error);
        return [];
    }
  }

export default fetchGoogleBooks;