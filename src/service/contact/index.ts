import { AxiosResponse } from "axios";
import ServiceBase from "@/service/ServiceBase";
import { IContactForm, IContactResponse } from "@/types";

class ContactService extends ServiceBase {
  createContact = (contactData: IContactForm) =>
    this.client.post<ResponseType, AxiosResponse<IContactResponse>>(
      "contacts",
      contactData
    );
}

export default new ContactService();
