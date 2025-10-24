export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  position?: string;
  city: string;
  countryCode: string;
  phone: string;
  phoneNumber: string;
  message: string;
}

export interface ContactLocation {
  iconImage: string;  
  iconAlt: string;    
  text: string;
  type: 'address' | 'phone';
  link?: string;
}
