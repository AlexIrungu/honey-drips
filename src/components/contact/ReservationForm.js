'use client';

import { useState } from 'react';
import Input, { Select, TextArea } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Loader2 } from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    people: '1',
    time: '',
    date: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          people: '1',
          time: '',
          date: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const peopleOptions = Array.from({ length: 20 }, (_, i) => ({
    value: (i + 1).toString(),
    label: `${i + 1} ${i === 0 ? 'Person' : 'People'}`,
  }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />

        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(254) 724887599"
          required
        />
      </div>

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john@example.com"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Select
          label="People №"
          name="people"
          value={formData.people}
          onChange={handleChange}
          options={peopleOptions}
          required
        />

        <Input
          label="Time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <Input
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <TextArea
        label="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Any special requests or dietary requirements..."
        rows={4}
      />

      {submitStatus === 'success' && (
        <div className="bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-xl">
          <p className="font-semibold">Reservation submitted successfully!</p>
          <p className="text-sm">We'll contact you shortly to confirm your booking.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border-2 border-red-500 text-red-800 px-6 py-4 rounded-xl">
          <p className="font-semibold">Something went wrong!</p>
          <p className="text-sm">Please try again or call us directly.</p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Make Reservation'
        )}
      </Button>
    </form>
  );
}