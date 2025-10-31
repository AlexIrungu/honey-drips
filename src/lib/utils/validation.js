// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (Kenyan format)
export const isValidPhone = (phone) => {
  // Accepts formats: +254..., 254..., 07..., 01...
  const phoneRegex = /^(\+?254|0)?[71]\d{8}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
};

// Name validation
export const isValidName = (name) => {
  return name.trim().length >= 2;
};

// Date validation (future dates only)
export const isValidFutureDate = (dateString) => {
  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};

// Time validation
export const isValidTime = (time) => {
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(time);
};

// Validate reservation form data
export const validateReservationForm = (data) => {
  const errors = {};

  if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name (at least 2 characters)';
  }

  if (!isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (data.email && !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.people || parseInt(data.people) < 1) {
    errors.people = 'Please select number of people';
  }

  if (!isValidTime(data.time)) {
    errors.time = 'Please enter a valid time';
  }

  if (!isValidFutureDate(data.date)) {
    errors.date = 'Please select a future date';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validate contact form data
export const validateContactForm = (data) => {
  const errors = {};

  if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name (at least 2 characters)';
  }

  if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Sanitize string input
export const sanitizeString = (str) => {
  return str.trim().replace(/[<>]/g, '');
};

// Format phone number for display
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.startsWith('254')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  } else if (cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  
  return phone;
};

// Format date for display
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Format currency
export const formatCurrency = (amount) => {
  return `Ksh.${amount.toLocaleString()}`;
};