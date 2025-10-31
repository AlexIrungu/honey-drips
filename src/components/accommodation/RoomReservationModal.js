'use client';

import { useState } from 'react';
import { X, Calendar, Users, Phone, Mail, User, MessageSquare, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Select from '@/components/ui/Select';

export default function RoomReservationModal({ isOpen, onClose, room }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    specialRequests: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.checkIn) {
      newErrors.checkIn = 'Check-in date is required';
    }
    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    }
    if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    return nights * room.price;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/room-reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          roomType: room.name,
          roomPrice: room.price,
          nights: calculateNights(),
          totalPrice: calculateTotal(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
          setFormData({
            name: '',
            phone: '',
            email: '',
            checkIn: '',
            checkOut: '',
            guests: '1',
            specialRequests: '',
          });
        }, 2000);
      } else {
        setErrors({ submit: data.error || 'Failed to submit reservation' });
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nights = calculateNights();
  const total = calculateTotal();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-honey to-honey-dark text-white p-8 rounded-t-2xl">
            <h2 className="text-3xl font-display font-bold mb-2">
              Reserve {room.name}
            </h2>
            <p className="text-honey-50">
              Ksh.{room.price.toLocaleString()} per night
            </p>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="mx-8 mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✓ Reservation submitted successfully! We'll contact you shortly.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                Guest Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  icon={User}
                  required
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="0712345678"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  icon={Phone}
                  required
                />
              </div>

              <div className="mt-4">
                <Input
                  label="Email (Optional)"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  icon={Mail}
                />
              </div>
            </div>

            {/* Booking Details */}
            <div>
              <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                Booking Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Check-in Date"
                  name="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={handleChange}
                  error={errors.checkIn}
                  icon={Calendar}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />

                <Input
                  label="Check-out Date"
                  name="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={handleChange}
                  error={errors.checkOut}
                  icon={Calendar}
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="mt-4">
                <Select
                  label="Number of Guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  options={[
                    { value: '1', label: '1 Guest' },
                    { value: '2', label: '2 Guests' },
                    { value: '3', label: '3 Guests' },
                    { value: '4', label: '4 Guests' },
                  ]}
                />
              </div>

              {/* Price Summary */}
              {nights > 0 && (
                <div className="mt-6 p-4 bg-honey-50 rounded-lg border border-honey-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-charcoal-700">
                      Ksh.{room.price.toLocaleString()} × {nights} night{nights !== 1 ? 's' : ''}
                    </span>
                    <span className="font-semibold text-charcoal-800">
                      Ksh.{total.toLocaleString()}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-honey-200">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-charcoal-800">Total</span>
                      <span className="font-bold text-xl text-honey">
                        Ksh.{total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Special Requests */}
            <div>
              <TextArea
                label="Special Requests (Optional)"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requirements or requests..."
                rows={3}
                icon={MessageSquare}
              />
            </div>

            {/* Error Message */}
            {errors.submit && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
                icon={isSubmitting ? Loader2 : null}
              >
                {isSubmitting ? 'Submitting...' : 'Reserve Room'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}