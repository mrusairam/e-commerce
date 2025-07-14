"use client";

import React from 'react';
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "./CartContext";

export default function Cart({ isOpen, onClose }) {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg z-50
      transition-transform duration-300 ease-in-out transform
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      role="dialog"
      aria-modal="true"
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button
          onClick={onClose}
          aria-label="Close cart"
          className="text-gray-700 hover:text-[#EE4899]"
        >
          <X className="w-6 h-6 cursor-pointer" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-140px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map(({ id, title, qty, price }) => (
            <div
              key={id}
              className="flex items-center justify-between border-t pb-2"
            >
              <div className="w-2/3">
                <p className="font-medium">{title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decreaseQty(id)}
                    className="p-1 border rounded cursor-pointer hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4 " />
                  </button>
                  <span className="px-2">{qty}</span>
                  <button
                    onClick={() => increaseQty(id)}
                    className="p-1 border rounded cursor-pointer hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4 " />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">${(price * qty).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(id)}
                  className="text-s text-[#EE4899] cursor-pointer  hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Checkout Footer */}
      {cartItems.length > 0 && (
  <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
    <div className="flex justify-between mb-3 text-lg font-medium">
      <span>Total:</span>
      <span>${total.toFixed(2)}</span>
    </div>
    <button className="w-full bg-[#EE4899] text-white py-2 cursor-pointer rounded hover:bg-[#e82282] transition">
      Proceed to Checkout
    </button>
  </div>
)}
    </div>
  );
}
