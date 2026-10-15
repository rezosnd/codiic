'use client';
import React, { useState, useEffect } from 'react';

// Color themes tailored for premium Indian storefronts
const THEMES = {
  indigo: {
    id: 'indigo',
    name: 'Royal Indigo',
    primary: '#4338CA',
    secondary: '#6366F1',
    light: '#EEF2FF',
    accent: '#818CF8',
    gradient: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
    badgeBg: 'rgba(99, 102, 241, 0.12)',
    badgeText: '#4338CA',
    badgeBorder: 'rgba(99, 102, 241, 0.25)',
    buttonBg: 'linear-gradient(135deg, #4338CA 0%, #6366F1 100%)',
    glow: 'rgba(67, 56, 202, 0.25)'
  },
  emerald: {
    id: 'emerald',
    name: 'Kerala Emerald',
    primary: '#047857',
    secondary: '#10B981',
    light: '#ECFDF5',
    accent: '#34D399',
    gradient: 'linear-gradient(135deg, #064E3B 0%, #065F46 50%, #047857 100%)',
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeText: '#047857',
    badgeBorder: 'rgba(16, 185, 129, 0.25)',
    buttonBg: 'linear-gradient(135deg, #047857 0%, #10B981 100%)',
    glow: 'rgba(4, 120, 87, 0.25)'
  },
  saffron: {
    id: 'saffron',
    name: 'Kashi Saffron',
    primary: '#D97706',
    secondary: '#F59E0B',
    light: '#FFFBEB',
    accent: '#FBBF24',
    gradient: 'linear-gradient(135deg, #78350F 0%, #92400E 50%, #D97706 100%)',
    badgeBg: 'rgba(245, 158, 11, 0.14)',
    badgeText: '#B45309',
    badgeBorder: 'rgba(245, 158, 11, 0.3)',
    buttonBg: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
    glow: 'rgba(217, 119, 6, 0.25)'
  },
  crimson: {
    id: 'crimson',
    name: 'Banarasi Crimson',
    primary: '#BE123C',
    secondary: '#F43F5E',
    light: '#FFF1F2',
    accent: '#FB7185',
    gradient: 'linear-gradient(135deg, #881337 0%, #9F1239 50%, #BE123C 100%)',
    badgeBg: 'rgba(244, 63, 94, 0.12)',
    badgeText: '#BE123C',
    badgeBorder: 'rgba(244, 63, 94, 0.25)',
    buttonBg: 'linear-gradient(135deg, #BE123C 0%, #F43F5E 100%)',
    glow: 'rgba(190, 18, 60, 0.25)'
  },
  teal: {
    id: 'teal',
    name: 'Jodhpur Teal',
    primary: '#0E7490',
    secondary: '#06B6D4',
    light: '#ECFEFF',
    accent: '#22D3EE',
    gradient: 'linear-gradient(135deg, #164E63 0%, #155E75 50%, #0E7490 100%)',
    badgeBg: 'rgba(6, 182, 212, 0.12)',
    badgeText: '#0E7490',
    badgeBorder: 'rgba(6, 182, 212, 0.25)',
    buttonBg: 'linear-gradient(135deg, #0E7490 0%, #06B6D4 100%)',
    glow: 'rgba(14, 116, 144, 0.25)'
  }
};

const MODULES = [
  { id: 'store', name: 'Website & Store', status: 'ACTIVE', sub: 'No-code builder' },
  { id: 'crm', name: 'Customer CRM', status: 'SYNCED', sub: 'Lead management' },
  { id: 'whatsapp', name: 'WhatsApp Hub', status: 'CONNECTED', sub: 'Broadcast & Chat' },
  { id: 'marketing', name: 'Marketing', status: 'LIVE', sub: 'Automated outreach' },
  { id: 'analytics', name: 'Analytics', status: 'TRACKING', sub: 'Real-time metrics' },
  { id: 'payments', name: 'UPI & Payments', status: 'INSTANT', sub: 'Zero gateway fees' },
  { id: 'gst', name: 'GST Invoicing', status: 'AUTOMATED', sub: 'One-click compliance' },
  { id: 'copilot', name: 'AI Copilot', status: 'ONLINE', sub: 'Merchant assistance' }
];

const INITIAL_ORDERS = [
  { id: '#COD-8921', name: 'Rahul Sharma', city: 'Delhi', item: 'Pure Kanjivaram Silk Saree', amount: '₹4,890', status: 'PAID (UPI)', statusColor: 'emerald' },
  { id: '#COD-8920', name: 'Priya Patel', city: 'Ahmedabad', item: 'Banarasi Brocade Dupatta x2', amount: '₹2,490', status: 'DISPATCHED', statusColor: 'blue' },
  { id: '#COD-8919', name: 'Amit Singh', city: 'Mumbai', item: 'Chanderi Zari Festive Set', amount: '₹3,750', status: 'PROCESSING', statusColor: 'amber' },
  { id: '#COD-8918', name: 'Ananya Roy', city: 'Kolkata', item: 'Tussar Handloom Stole', amount: '₹1,650', status: 'PAID (UPI)', statusColor: 'emerald' }
];

export default function DemoSimulator() {
  const [mounted, setMounted] = useState(false);
  const [headline, setHeadline] = useState('Premium Indian Silk Sarees');
  const [themeKey, setThemeKey] = useState('indigo');
  const [layout, setLayout] = useState(0); // 0: Minimal, 1: Split, 2: Full-Width, 3: Centered
  const [showShippingBadge, setShowShippingBadge] = useState(true);
  const [showCodBadge, setShowCodBadge] = useState(true);
  
  // Dashboard state
  const [activeTab, setActiveTab] = useState('overview');
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [orderCount, setOrderCount] = useState(14);
  const [revenue, setRevenue] = useState(14250);
  const [activeVisitors, setActiveVisitors] = useState(82);
  const [simFeedback, setSimFeedback] = useState('');
  const [activeModule, setActiveModule] = useState('store');
  const [waReplyNotice, setWaReplyNotice] = useState('');

  const currentTheme = THEMES[themeKey] || THEMES.indigo;

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setActiveVisitors(prev => Math.max(65, Math.min(115, prev + Math.floor(Math.random() * 5) - 2)));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const simulateNewOrder = () => {
    const candidates = [
      { name: 'Kavya Nair', city: 'Bengaluru', item: 'Mysore Silk Weave Saree', amount: 5200 },
      { name: 'Deepak Verma', city: 'Jaipur', item: 'Kota Doria Festive Saree', amount: 2890 },
      { name: 'Sneha Kulkarni', city: 'Pune', item: 'Paithani Silk Zari Border', amount: 6450 },
      { name: 'Vikram Gill', city: 'Chandigarh', item: 'Handcrafted Silk Dupatta', amount: 1950 }
    ];
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    const newId = `#COD-${8922 + (orderCount - 14)}`;

    const newOrder = {
      id: newId,
      name: pick.name,
      city: pick.city,
      item: pick.item,
      amount: `₹${pick.amount.toLocaleString('en-IN')}`,
      status: 'PAID (UPI)',
      statusColor: 'emerald',
      isNew: true
    };

    setOrders(prev => [newOrder, ...prev.slice(0, 4)]);
    setOrderCount(prev => prev + 1);
    setRevenue(prev => prev + pick.amount);
    setSimFeedback(`Order ${newId} confirmed for ${pick.name}`);

    setTimeout(() => {
      setSimFeedback('');
    }, 3500);
  };

  const handleSendWhatsApp = (name, id) => {
    setWaReplyNotice(`Automated WhatsApp confirmation dispatched to ${name} for order ${id}`);
    setTimeout(() => setWaReplyNotice(''), 3000);
  };

  if (!mounted) {
    return (
      <div style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'abc-favorit, sans-serif', color: '#08084F', fontSize: '15px', fontWeight: 600 }}>
          Loading Codiic Live Studio...
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      
      {/* =========================================================
          MODULE ECOSYSTEM BAR (from Codiic Central Engine)
          ========================================================= */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid rgba(8, 8, 79, 0.08)',
        boxShadow: '0 12px 36px -12px rgba(8, 8, 79, 0.06)',
        padding: '24px',
        marginBottom: '28px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '18px',
          borderBottom: '1px solid #F1F3F9',
          marginBottom: '20px'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10B981',
                boxShadow: '0 0 10px #10B981',
                display: 'inline-block'
              }}></span>
              <span style={{
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#08084F'
              }}>Codiic Central Architecture &mdash; Unified Database</span>
            </div>
            <div style={{
              fontFamily: 'abc-favorit, sans-serif',
              fontSize: '13px',
              color: '#64748B',
              marginTop: '4px'
            }}>
              All 8 core modules synchronize into one unified database. Click any module to test connectivity.
            </div>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#F8FAFC',
            padding: '6px 14px',
            borderRadius: '100px',
            border: '1px solid #E2E8F0'
          }}>
            <span style={{ fontSize: '11px', fontFamily: 'abc-favorit, sans-serif', fontWeight: 600, color: '#0F172A' }}>
              Latency: <strong style={{ color: '#047857' }}>12ms</strong> (India Node - Mumbai)
            </span>
          </div>
        </div>

        {/* 8 Core Modules Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px'
        }}>
          {MODULES.map(m => {
            const isSelected = activeModule === m.id;
            return (
              <div
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                style={{
                  background: isSelected ? '#08084F' : '#F8FAFC',
                  color: isSelected ? '#FFFFFF' : '#0F172A',
                  padding: '12px 14px',
                  borderRadius: '14px',
                  border: isSelected ? '1px solid #08084F' : '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                  boxShadow: isSelected ? '0 10px 20px -6px rgba(8, 8, 79, 0.25)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: isSelected ? '#FFFFFF' : '#10B981'
                  }}></div>
                  <span style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '2px 6px',
                    borderRadius: '100px',
                    background: isSelected ? 'rgba(255,255,255,0.2)' : 'rgba(16, 185, 129, 0.12)',
                    color: isSelected ? '#FFFFFF' : '#047857'
                  }}>{m.status}</span>
                </div>
                <div style={{
                  fontFamily: 'abc-favorit, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginBottom: '2px',
                  color: isSelected ? '#FFFFFF' : '#08084F'
                }}>{m.name}</div>
                <div style={{
                  fontFamily: 'abc-favorit, sans-serif',
                  fontSize: '10px',
                  color: isSelected ? 'rgba(255,255,255,0.7)' : '#64748B'
                }}>{m.sub}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          MAIN WORKSPACE GRID: Customizer Studio (Left) + Store & Dashboard (Right)
          ========================================================= */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(300px, 340px) 1fr',
        gap: '24px',
        alignItems: 'start'
      }} className="cd-main-grid">

        {/* -------------------------------------------------------
            LEFT COLUMN: THE LIVE CUSTOMIZER PANEL
            ------------------------------------------------------- */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid rgba(8, 8, 79, 0.08)',
          boxShadow: '0 20px 40px -15px rgba(8, 8, 79, 0.07)',
          overflow: 'hidden',
          position: 'sticky',
          top: '20px'
        }}>
          {/* Panel Header */}
          <div style={{
            padding: '18px 22px',
            borderBottom: '1px solid #F1F3F9',
            background: 'linear-gradient(to right, #FAF5FF, #FFFFFF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span style={{
              fontFamily: 'abc-favorit, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#08084F'
            }}>Storefront Customizer</span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'abc-favorit, sans-serif',
              fontSize: '10px',
              fontWeight: 700,
              color: '#047857',
              background: '#ECFDF5',
              padding: '3px 10px',
              borderRadius: '100px',
              border: '1px solid rgba(16, 185, 129, 0.25)'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
              LIVE ENGINE
            </span>
          </div>

          <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            
            {/* 1. Headline Input */}
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#475569',
                marginBottom: '8px'
              }}>
                <span>STOREFRONT HEADLINE</span>
                <span style={{ color: '#94A3B8' }}>{headline.length} / 40</span>
              </div>
              <input
                type="text"
                value={headline}
                maxLength={40}
                onChange={(e) => setHeadline(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '12px',
                  background: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  color: '#0F172A',
                  fontFamily: 'abc-favorit, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#4338CA'; e.target.style.background = '#FFFFFF'; }}
                onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.background = '#F8FAFC'; }}
              />

              {/* Quick Preset Buttons */}
              <div style={{ display: 'flex', gap: '6px', marginTop: '8px', flexWrap: 'wrap' }}>
                {[
                  'Premium Indian Silk Sarees',
                  'Artisan Chai & Spice Co.',
                  'Jaipur Handloom Kurtis'
                ].map((txt) => (
                  <button
                    key={txt}
                    onClick={() => setHeadline(txt)}
                    style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '10px',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: '#F1F5F9',
                      color: '#475569',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#E2E8F0'}
                    onMouseOut={(e) => e.target.style.background = '#F1F5F9'}
                  >
                    + {txt.split(' ')[0]} {txt.split(' ')[1]}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Theme Accent Swatches */}
            <div>
              <div style={{
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#475569',
                marginBottom: '10px'
              }}>THEME ACCENT</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                {Object.values(THEMES).map((th) => {
                  const isSelected = themeKey === th.id;
                  return (
                    <div
                      key={th.id}
                      onClick={() => setThemeKey(th.id)}
                      style={{ cursor: 'pointer', textAlign: 'center' }}
                    >
                      <div style={{
                        aspectRatio: '1',
                        borderRadius: '12px',
                        background: th.buttonBg,
                        border: isSelected ? '3px solid #08084F' : '2px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '13px',
                        color: '#FFFFFF',
                        fontWeight: 900,
                        transform: isSelected ? 'scale(1.08)' : 'scale(1)',
                        boxShadow: isSelected ? `0 6px 16px ${th.glow}` : 'none',
                        transition: 'all 0.2s'
                      }}>
                        {isSelected ? '✓' : ''}
                      </div>
                      <div style={{
                        fontFamily: 'abc-favorit, sans-serif',
                        fontSize: '10px',
                        fontWeight: isSelected ? 700 : 500,
                        color: isSelected ? '#08084F' : '#64748B',
                        marginTop: '6px',
                        letterSpacing: '0.02em',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {th.name.split(' ')[1] || th.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Hero Layout Selector */}
            <div>
              <div style={{
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#475569',
                marginBottom: '10px'
              }}>HERO LAYOUT</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 0, label: 'Minimal Banner + CTA', desc: 'High-speed clean banner' },
                  { id: 1, label: 'Split Image & Product', desc: 'Headline with collection preview' },
                  { id: 2, label: 'Full-Width Hero', desc: 'Immersive collection visual' },
                  { id: 3, label: 'Centered Luxe Overlay', desc: 'Editorial bridal elegance' }
                ].map((item) => {
                  const isSelected = layout === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setLayout(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        border: isSelected ? `1.5px solid ${currentTheme.primary}` : '1px solid #E2E8F0',
                        background: isSelected ? currentTheme.light : '#F8FAFC',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: isSelected ? `5px solid ${currentTheme.primary}` : '2px solid #94A3B8',
                        background: '#FFFFFF',
                        flexShrink: 0
                      }}></div>
                      <div>
                        <div style={{
                          fontFamily: 'abc-favorit, sans-serif',
                          fontSize: '13px',
                          fontWeight: isSelected ? 700 : 600,
                          color: isSelected ? '#08084F' : '#334155'
                        }}>{item.label}</div>
                        <div style={{
                          fontFamily: 'abc-favorit, sans-serif',
                          fontSize: '11px',
                          color: '#64748B'
                        }}>{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Store Badges Toggle */}
            <div>
              <div style={{
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#475569',
                marginBottom: '10px'
              }}>STORE BADGES</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Free Shipping toggle */}
                <div
                  onClick={() => setShowShippingBadge(!showShippingBadge)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 14px',
                    borderRadius: '12px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1E293B' }}>
                    Show Free Shipping Badge
                  </span>
                  <div style={{
                    width: '40px',
                    height: '22px',
                    borderRadius: '100px',
                    background: showShippingBadge ? currentTheme.primary : '#CBD5E1',
                    position: 'relative',
                    transition: 'background 0.2s'
                  }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      position: 'absolute',
                      top: '3px',
                      left: showShippingBadge ? '21px' : '3px',
                      transition: 'left 0.2s',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}></div>
                  </div>
                </div>

                {/* COD Badge toggle */}
                <div
                  onClick={() => setShowCodBadge(!showCodBadge)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 14px',
                    borderRadius: '12px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1E293B' }}>
                    Show Cash on Delivery (COD)
                  </span>
                  <div style={{
                    width: '40px',
                    height: '22px',
                    borderRadius: '100px',
                    background: showCodBadge ? currentTheme.primary : '#CBD5E1',
                    position: 'relative',
                    transition: 'background 0.2s'
                  }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      position: 'absolute',
                      top: '3px',
                      left: showCodBadge ? '21px' : '3px',
                      transition: 'left 0.2s',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zero Code Information Box */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '14px',
              padding: '14px',
              textAlign: 'center'
            }}>
              <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '13px', fontWeight: 700, color: '#08084F' }}>
                Instant Real-Time Preview
              </div>
              <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', color: '#64748B', marginTop: '3px' }}>
                Zero code required. Fully responsive across devices.
              </div>
            </div>

          </div>
        </div>

        {/* -------------------------------------------------------
            RIGHT COLUMN: LIVE PREVIEW & MERCHANT DASHBOARD
            ------------------------------------------------------- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* =====================================================
              1. STOREFRONT PREVIEW WINDOW (MAC BROWSER STYLE)
              ===================================================== */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(8, 8, 79, 0.08)',
            boxShadow: '0 20px 40px -15px rgba(8, 8, 79, 0.08)',
            overflow: 'hidden'
          }}>
            {/* Browser top chrome */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 18px',
              borderBottom: '1px solid #F1F3F9',
              background: '#FAFAFF'
            }}>
              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }}></div>
              </div>
              <div style={{
                flex: 1,
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '6px 14px',
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '12px',
                color: '#64748B',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                https://my-store.codiic.site
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '100px',
                background: '#ECFDF5',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
                <span style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '10px', fontWeight: 700, color: '#047857' }}>LIVE PREVIEW</span>
              </div>
            </div>

            {/* Store Announcement Bar */}
            {showShippingBadge && (
              <div style={{
                background: currentTheme.primary,
                color: '#FFFFFF',
                padding: '8px 16px',
                textAlign: 'center',
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background 0.3s'
              }}>
                <span>FREE EXPRESS SHIPPING ACROSS INDIA</span>
                {showCodBadge && <span>&bull; CASH ON DELIVERY (COD) AVAILABLE</span>}
              </div>
            )}

            {/* Storefront Mini Nav */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 24px',
              borderBottom: '1px solid #F1F3F9',
              background: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: currentTheme.primary,
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'druk-cyr, Impact, sans-serif',
                  fontWeight: 900,
                  fontSize: '13px'
                }}>C.</div>
                <span style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '14px', fontWeight: 700, color: '#08084F' }}>
                  Chai &amp; Kraft Silk Co.
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '12px',
                color: '#64748B',
                fontWeight: 600
              }}>
                <span style={{ color: currentTheme.primary }}>New Arrivals</span>
                <span>Best Sellers</span>
                <span>Bridal</span>
                <span style={{
                  background: '#F1F5F9',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  color: '#08084F'
                }}>Cart (0)</span>
              </div>
            </div>

            {/* Dynamic Store Hero Section */}
            <div style={{
              padding: layout === 2 ? '50px 32px' : '40px 32px',
              background: layout === 2 ? currentTheme.gradient : '#FAF5FF',
              color: layout === 2 ? '#FFFFFF' : '#08084F',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s'
            }}>
              {/* Subtle pattern */}
              <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.04,
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                pointerEvents: 'none'
              }}></div>

              {/* Layout Variations */}
              {layout === 0 && (
                /* Minimal Banner + CTA */
                <div style={{ maxWidth: '580px', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    background: currentTheme.badgeBg,
                    border: `1px solid ${currentTheme.badgeBorder}`,
                    color: currentTheme.badgeText,
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    textTransform: 'uppercase'
                  }}>
                    2026 FESTIVE COLLECTION
                  </div>
                  <h3 style={{
                    fontFamily: 'druk-cyr, Impact, sans-serif',
                    fontSize: 'clamp(28px, 4vw, 44px)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    lineHeight: 0.95,
                    margin: '0 0 12px 0',
                    color: '#08084F'
                  }}>{headline || 'Your Store Headline'}</h3>
                  <p style={{
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '14px',
                    color: '#475569',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                    maxWidth: '460px'
                  }}>
                    Handcrafted authentic silks delivered straight to your home with instant cash-on-delivery options.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    <button style={{
                      padding: '12px 28px',
                      borderRadius: '100px',
                      background: currentTheme.buttonBg,
                      color: '#FFFFFF',
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: `0 6px 18px ${currentTheme.glow}`,
                      transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                      Explore Collection &rarr;
                    </button>
                    <span style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#047857',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      Rated 4.9/5 by 1,420+ buyers
                    </span>
                  </div>
                </div>
              )}

              {layout === 1 && (
                /* Split Image Layout */
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 0.8fr',
                  gap: '24px',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1
                }} className="cd-split-hero">
                  <div>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      background: currentTheme.badgeBg,
                      border: `1px solid ${currentTheme.badgeBorder}`,
                      color: currentTheme.badgeText,
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      marginBottom: '10px'
                    }}>
                      100% PURE SILK &bull; HANDWOVEN CERTIFIED
                    </div>
                    <h3 style={{
                      fontFamily: 'druk-cyr, Impact, sans-serif',
                      fontSize: 'clamp(26px, 3.5vw, 40px)',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      lineHeight: 0.95,
                      margin: '0 0 12px 0',
                      color: '#08084F'
                    }}>{headline || 'Your Store Headline'}</h3>
                    <p style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '13px',
                      color: '#475569',
                      lineHeight: 1.55,
                      margin: '0 0 18px 0'
                    }}>
                      Artisan handloom silks woven by master weavers in Varanasi and Kanchipuram.
                    </p>
                    <button style={{
                      padding: '11px 24px',
                      borderRadius: '100px',
                      background: currentTheme.buttonBg,
                      color: '#FFFFFF',
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: `0 6px 18px ${currentTheme.glow}`
                    }}>
                      Shop Collection &rarr;
                    </button>
                  </div>
                  {/* Product card preview */}
                  <div style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: '0 10px 25px -5px rgba(8, 8, 79, 0.1)',
                    border: '1px solid #E2E8F0',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '110px',
                      borderRadius: '10px',
                      background: currentTheme.gradient,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      marginBottom: '12px'
                    }}>
                      <span style={{ fontFamily: 'druk-cyr, Impact, sans-serif', fontSize: '18px', fontWeight: 900, letterSpacing: '0.05em' }}>
                        HANDLOOM
                      </span>
                      <span style={{ fontSize: '10px', opacity: 0.8, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>
                        Authentic Weave
                      </span>
                    </div>
                    <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '13px', fontWeight: 700, color: '#08084F' }}>
                      Kanjivaram Gold Zari Saree
                    </div>
                    <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '14px', fontWeight: 800, color: currentTheme.primary, marginTop: '4px' }}>
                      ₹4,890 <span style={{ fontSize: '11px', textDecoration: 'line-through', color: '#94A3B8' }}>₹8,499</span>
                    </div>
                  </div>
                </div>
              )}

              {layout === 2 && (
                /* Full-Width Hero */
                <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 14px',
                    borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    marginBottom: '14px',
                    backdropFilter: 'blur(8px)'
                  }}>
                    ROYAL BRIDAL COLLECTION &bull; 2026 EDITION
                  </div>
                  <h3 style={{
                    fontFamily: 'druk-cyr, Impact, sans-serif',
                    fontSize: 'clamp(32px, 4.5vw, 52px)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    lineHeight: 0.92,
                    margin: '0 0 14px 0',
                    color: '#FFFFFF'
                  }}>{headline || 'Your Store Headline'}</h3>
                  <p style={{
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.6,
                    margin: '0 auto 22px auto',
                    maxWidth: '480px'
                  }}>
                    Experience authentic heritage craft with unmatched lustre, certified silk mark, and direct artisan pricing.
                  </p>
                  <button style={{
                    padding: '13px 32px',
                    borderRadius: '100px',
                    background: '#FFFFFF',
                    color: currentTheme.primary,
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '14px',
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                  }}>
                    Explore Collection &rarr;
                  </button>
                </div>
              )}

              {layout === 3 && (
                /* Centered Luxe Overlay */
                <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '40px',
                    height: '2px',
                    background: currentTheme.primary,
                    margin: '0 auto 14px auto'
                  }}></div>
                  <h3 style={{
                    fontFamily: 'druk-cyr, Impact, sans-serif',
                    fontSize: 'clamp(30px, 4vw, 46px)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    lineHeight: 0.95,
                    margin: '0 0 12px 0',
                    color: '#08084F'
                  }}>{headline || 'Your Store Headline'}</h3>
                  <p style={{
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: '0 auto 20px auto'
                  }}>
                    Handcrafted luxury for weddings, festivals, and celebrations across India.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                    <button style={{
                      padding: '12px 28px',
                      borderRadius: '100px',
                      background: currentTheme.buttonBg,
                      color: '#FFFFFF',
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: `0 6px 18px ${currentTheme.glow}`
                    }}>
                      View Saree Catalog
                    </button>
                    <button style={{
                      padding: '12px 22px',
                      borderRadius: '100px',
                      background: '#FFFFFF',
                      color: '#08084F',
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      border: '1px solid #CBD5E1',
                      cursor: 'pointer'
                    }}>
                      WhatsApp Catalog
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Store Preview Footer Badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 24px',
              borderTop: '1px solid #F1F3F9',
              background: '#FFFFFF',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <div style={{
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '11px',
                color: '#64748B',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
                Theme: <strong style={{ color: '#08084F' }}>{currentTheme.name}</strong> &bull; Layout: <strong style={{ color: '#08084F' }}>{['Minimal', 'Split', 'Full-Width', 'Centered'][layout]}</strong>
              </div>
              <div style={{
                display: 'flex',
                gap: '14px',
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '11px',
                color: '#475569',
                fontWeight: 600
              }}>
                <span>UPI QR Integration</span>
                <span>Delhivery &amp; Shiprocket</span>
                <span>WhatsApp Bot Automation</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              2. REAL MERCHANT DASHBOARD (CHAI & KRAFT STORE)
              ===================================================== */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(8, 8, 79, 0.08)',
            boxShadow: '0 20px 40px -15px rgba(8, 8, 79, 0.08)',
            overflow: 'hidden'
          }}>
            {/* Dashboard Header */}
            <div style={{
              padding: '18px 24px',
              borderBottom: '1px solid #F1F3F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              background: '#FAFAFF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'druk-cyr, Impact, sans-serif',
                  fontSize: '17px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  background: currentTheme.primary,
                  boxShadow: `0 4px 14px ${currentTheme.glow}`,
                  flexShrink: 0
                }}>C.</div>
                <div>
                  <div style={{
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#08084F',
                    marginBottom: '2px'
                  }}>Chai &amp; Kraft Store</div>
                  <div style={{
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '11px',
                    color: '#64748B'
                  }}>app.codiic.com/dashboard &bull; GSTIN: 27AABCU9603R1ZM</div>
                </div>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ECFDF5',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '100px',
                padding: '6px 16px'
              }}>
                <span style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 8px #10B981'
                }}></span>
                <span style={{
                  fontFamily: 'abc-favorit, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#047857'
                }}>Plan: Pro Business (₹1/Day Active)</span>
              </div>
            </div>

            {/* Dashboard 4 KPI Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderBottom: '1px solid #F1F3F9'
            }} className="cd-kpi-grid">
              
              <div style={{ padding: '18px 20px', borderRight: '1px solid #F1F3F9' }}>
                <div style={{
                  fontFamily: 'abc-favorit, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#64748B',
                  marginBottom: '4px'
                }}>Today's Revenue</div>
                <div style={{
                  fontFamily: 'druk-cyr, Impact, sans-serif',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  fontWeight: 900,
                  color: currentTheme.primary,
                  marginBottom: '4px',
                  letterSpacing: '-0.01em'
                }}>₹{revenue.toLocaleString('en-IN')}</div>
                <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', color: '#047857', fontWeight: 600 }}>
                  ↑ +18% vs yesterday
                </div>
              </div>

              <div style={{ padding: '18px 20px', borderRight: '1px solid #F1F3F9' }}>
                <div style={{
                  fontFamily: 'abc-favorit, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#64748B',
                  marginBottom: '4px'
                }}>Store Visitors</div>
                <div style={{
                  fontFamily: 'druk-cyr, Impact, sans-serif',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  fontWeight: 900,
                  color: '#08084F',
                  marginBottom: '4px',
                  letterSpacing: '-0.01em'
                }}>1,840</div>
                <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', color: '#047857', fontWeight: 600 }}>
                  ● {activeVisitors} active now
                </div>
              </div>

              <div style={{ padding: '18px 20px', borderRight: '1px solid #F1F3F9' }}>
                <div style={{
                  fontFamily: 'abc-favorit, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#64748B',
                  marginBottom: '4px'
                }}>Orders Today</div>
                <div style={{
                  fontFamily: 'druk-cyr, Impact, sans-serif',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  fontWeight: 900,
                  color: '#08084F',
                  marginBottom: '4px',
                  letterSpacing: '-0.01em'
                }}>{orderCount}</div>
                <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', color: '#047857', fontWeight: 600 }}>
                  ↑ {orderCount - 2} fulfilled
                </div>
              </div>

              <div style={{ padding: '18px 20px' }}>
                <div style={{
                  fontFamily: 'abc-favorit, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#64748B',
                  marginBottom: '4px'
                }}>WhatsApp Leads</div>
                <div style={{
                  fontFamily: 'druk-cyr, Impact, sans-serif',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  fontWeight: 900,
                  color: '#08084F',
                  marginBottom: '4px',
                  letterSpacing: '-0.01em'
                }}>112</div>
                <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', color: '#047857', fontWeight: 600 }}>
                  ↑ 94% response rate
                </div>
              </div>

            </div>

            {/* Dashboard Tabs */}
            <div style={{
              display: 'flex',
              borderBottom: '1px solid #F1F3F9',
              padding: '0 20px',
              background: '#FFFFFF',
              overflowX: 'auto'
            }}>
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'orders', label: `Orders (${orderCount})` },
                { id: 'whatsapp', label: 'WhatsApp Leads' },
                { id: 'automations', label: 'Automations (5)' }
              ].map(t => {
                const isActive = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    style={{
                      padding: '14px 18px',
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '13px',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? currentTheme.primary : '#64748B',
                      border: 'none',
                      background: 'none',
                      borderBottom: isActive ? `2.5px solid ${currentTheme.primary}` : '2.5px solid transparent',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s'
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Feedback alert banner */}
            {simFeedback && (
              <div style={{
                background: '#ECFDF5',
                color: '#047857',
                padding: '10px 20px',
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                borderBottom: '1px solid #A7F3D0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>{simFeedback}</span>
                <span style={{ fontSize: '11px', fontWeight: 500 }}>Real-time sync</span>
              </div>
            )}

            {waReplyNotice && (
              <div style={{
                background: '#EFF6FF',
                color: '#1D4ED8',
                padding: '10px 20px',
                fontFamily: 'abc-favorit, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                borderBottom: '1px solid #BFDBFE'
              }}>
                {waReplyNotice}
              </div>
            )}

            {/* Tab Contents */}
            <div style={{ padding: '22px' }}>

              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    <span style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#08084F'
                    }}>Weekly Sales Performance</span>
                    <span style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '12px',
                      color: '#64748B',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
                      Updated 2 mins ago
                    </span>
                  </div>

                  {/* SVG interactive revenue bar chart */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '4px',
                    height: '100px',
                    marginBottom: '10px',
                    padding: '8px',
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0'
                  }}>
                    {[
                      35, 48, 42, 65, 58, 80, 62, 85, 70, 92, 75, 96, 82, 68, 54, 45, 62, 78, 88, 80, 65, 76, 85, 90, 78, 68, 55, 84, 95, 100
                    ].map((val, idx) => {
                      const isToday = idx === 29;
                      return (
                        <div
                          key={idx}
                          style={{
                            flex: 1,
                            height: `${val}%`,
                            borderRadius: '3px 3px 0 0',
                            background: isToday ? currentTheme.buttonBg : idx >= 25 ? currentTheme.primary : '#CBD5E1',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            position: 'relative'
                          }}
                          title={`Day ${idx + 1}: ₹${(val * 142).toLocaleString('en-IN')}`}
                          onMouseOver={(e) => {
                            e.currentTarget.style.opacity = '0.8';
                            e.currentTarget.style.transform = 'scaleY(1.05)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.transform = 'none';
                          }}
                        ></div>
                      );
                    })}
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '10px',
                    color: '#94A3B8',
                    marginBottom: '20px'
                  }}>
                    <span>30 days ago</span>
                    <span>15 days ago</span>
                    <span style={{ fontWeight: 700, color: currentTheme.primary }}>Today (₹{revenue.toLocaleString('en-IN')})</span>
                  </div>

                  {/* 3 Metric Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                    <div style={{
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '16px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontFamily: 'abc-favorit, sans-serif',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        color: '#64748B',
                        textTransform: 'uppercase',
                        marginBottom: '8px'
                      }}>Average Order Value</div>
                      <div style={{
                        fontFamily: 'druk-cyr, Impact, sans-serif',
                        fontSize: '24px',
                        fontWeight: 900,
                        color: '#08084F'
                      }}>₹509</div>
                    </div>

                    <div style={{
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '16px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontFamily: 'abc-favorit, sans-serif',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        color: '#64748B',
                        textTransform: 'uppercase',
                        marginBottom: '8px'
                      }}>Store Conversion</div>
                      <div style={{
                        fontFamily: 'druk-cyr, Impact, sans-serif',
                        fontSize: '24px',
                        fontWeight: 900,
                        color: '#08084F'
                      }}>4.79%</div>
                    </div>

                    <div style={{
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '16px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontFamily: 'abc-favorit, sans-serif',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        color: '#64748B',
                        textTransform: 'uppercase',
                        marginBottom: '8px'
                      }}>WhatsApp Open Rate</div>
                      <div style={{
                        fontFamily: 'druk-cyr, Impact, sans-serif',
                        fontSize: '24px',
                        fontWeight: 900,
                        color: '#047857'
                      }}>94%</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ORDERS */}
              {activeTab === 'orders' && (
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    <span style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#08084F'
                    }}>Recent E-Commerce Orders</span>
                    <button
                      onClick={simulateNewOrder}
                      style={{
                        padding: '9px 18px',
                        borderRadius: '100px',
                        background: currentTheme.buttonBg,
                        color: '#FFFFFF',
                        fontFamily: 'abc-favorit, sans-serif',
                        fontSize: '12px',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: `0 4px 12px ${currentTheme.glow}`,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      + Simulate New Order
                    </button>
                  </div>

                  <div style={{
                    overflowX: 'auto',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '580px' }}>
                      <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                          <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', fontWeight: 700, color: '#64748B' }}>Order ID</th>
                          <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', fontWeight: 700, color: '#64748B' }}>Customer</th>
                          <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', fontWeight: 700, color: '#64748B' }}>Item</th>
                          <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', fontWeight: 700, color: '#64748B' }}>Amount</th>
                          <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', fontWeight: 700, color: '#64748B' }}>Status</th>
                          <th style={{ padding: '12px 14px', textAlign: 'left', fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', fontWeight: 700, color: '#64748B' }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((ord) => (
                          <tr
                            key={ord.id}
                            style={{
                              borderBottom: '1px solid #F1F3F9',
                              background: ord.isNew ? '#ECFDF5' : 'transparent',
                              transition: 'background 0.3s'
                            }}
                          >
                            <td style={{ padding: '12px 14px', fontFamily: 'druk-cyr, monospace', fontSize: '13px', fontWeight: 700, color: '#08084F' }}>
                              {ord.id}
                            </td>
                            <td style={{ padding: '12px 14px', fontFamily: 'abc-favorit, sans-serif', fontSize: '13px', color: '#1E293B' }}>
                              {ord.name} <span style={{ color: '#64748B', fontSize: '11px' }}>({ord.city})</span>
                            </td>
                            <td style={{ padding: '12px 14px', fontFamily: 'abc-favorit, sans-serif', fontSize: '12px', color: '#475569' }}>
                              {ord.item}
                            </td>
                            <td style={{ padding: '12px 14px', fontFamily: 'abc-favorit, sans-serif', fontSize: '13px', fontWeight: 800, color: '#08084F' }}>
                              {ord.amount}
                            </td>
                            <td style={{ padding: '12px 14px' }}>
                              <span style={{
                                padding: '3px 10px',
                                borderRadius: '100px',
                                fontFamily: 'abc-favorit, sans-serif',
                                fontSize: '10px',
                                fontWeight: 700,
                                background: ord.status.includes('PAID') ? '#ECFDF5' : ord.status.includes('DISPATCHED') ? '#EFF6FF' : '#FFFBEB',
                                color: ord.status.includes('PAID') ? '#047857' : ord.status.includes('DISPATCHED') ? '#1D4ED8' : '#B45309',
                                border: '1px solid rgba(0,0,0,0.06)'
                              }}>
                                {ord.status}
                              </span>
                            </td>
                            <td style={{ padding: '12px 14px' }}>
                              <button
                                onClick={() => handleSendWhatsApp(ord.name, ord.id)}
                                style={{
                                  padding: '5px 12px',
                                  borderRadius: '100px',
                                  background: '#F1F5F9',
                                  color: '#08084F',
                                  fontFamily: 'abc-favorit, sans-serif',
                                  fontSize: '11px',
                                  fontWeight: 600,
                                  border: '1px solid #CBD5E1',
                                  cursor: 'pointer'
                                }}
                              >
                                Send WhatsApp
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: WHATSAPP LEADS */}
              {activeTab === 'whatsapp' && (
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    <span style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#08084F'
                    }}>Customer Inquiries</span>
                    <span style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#047857',
                      background: '#ECFDF5',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}>
                      112 Total &bull; 94% Auto-Responded
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { name: 'Kavya Nair', city: 'Bengaluru', phone: '+91 98765 43210', msg: 'Bulk order inquiry for corporate festive gifting (50 silk sets)', tag: 'PRIORITY', time: '2m ago' },
                      { name: 'Deepak Verma', city: 'Jaipur', phone: '+91 87654 32109', msg: 'Is cash-on-delivery available for Pin code 302001?', tag: 'PRIORITY', time: '14m ago' },
                      { name: 'Meena Iyer', city: 'Chennai', phone: '+91 76543 21098', msg: 'Can I customize the saree blouse embroidery pattern?', tag: 'INQUIRY', time: '1h ago' },
                      { name: 'Arjun Patel', city: 'Ahmedabad', phone: '+91 65432 10987', msg: 'Please share tracking details for order #COD-8910', tag: 'SUPPORT', time: '2h ago' }
                    ].map((lead, i) => (
                      <div
                        key={i}
                        style={{
                          background: '#F8FAFC',
                          borderRadius: '14px',
                          border: '1px solid #E2E8F0',
                          padding: '14px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          transition: 'background 0.2s'
                        }}
                      >
                        <div style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          background: currentTheme.buttonBg,
                          color: '#FFFFFF',
                          fontFamily: 'abc-favorit, sans-serif',
                          fontSize: '15px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {lead.name.charAt(0)}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: 'abc-favorit, sans-serif',
                            fontSize: '13px',
                            fontWeight: 700,
                            color: '#08084F',
                            marginBottom: '2px'
                          }}>
                            {lead.name}
                            <span style={{ fontSize: '10px', color: '#64748B', fontWeight: 500 }}>({lead.city})</span>
                            <span style={{
                              fontSize: '9px',
                              fontWeight: 700,
                              padding: '2px 6px',
                              borderRadius: '100px',
                              background: lead.tag === 'PRIORITY' ? '#FEF3C7' : '#EFF6FF',
                              color: lead.tag === 'PRIORITY' ? '#B45309' : '#1D4ED8'
                            }}>{lead.tag}</span>
                          </div>
                          <div style={{
                            fontFamily: 'abc-favorit, sans-serif',
                            fontSize: '12px',
                            color: '#334155',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                            &ldquo;{lead.msg}&rdquo;
                          </div>
                          <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '10px', color: '#94A3B8', marginTop: '2px' }}>
                            {lead.phone}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '10px', color: '#94A3B8', marginBottom: '6px' }}>
                            {lead.time}
                          </div>
                          <button
                            onClick={() => handleSendWhatsApp(lead.name, 'Lead-Inquiry')}
                            style={{
                              padding: '5px 14px',
                              borderRadius: '100px',
                              background: '#ECFDF5',
                              color: '#047857',
                              fontFamily: 'abc-favorit, sans-serif',
                              fontSize: '11px',
                              fontWeight: 700,
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                              cursor: 'pointer'
                            }}
                          >
                            Reply &rarr;
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: AUTOMATIONS */}
              {activeTab === 'automations' && (
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#08084F'
                    }}>Active Automated Workflows</span>
                    <span style={{
                      fontFamily: 'abc-favorit, sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#047857',
                      background: '#ECFDF5',
                      padding: '4px 12px',
                      borderRadius: '100px'
                    }}>
                      5 Active &bull; 0 Errors
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { name: 'Order Confirmation WhatsApp Bot', trigger: 'Trigger: New Order Placed', runs: '248 runs', status: 'RUNNING' },
                      { name: 'GST Invoice Auto-Generation & Email', trigger: 'Trigger: Payment Settled', runs: '186 runs', status: 'RUNNING' },
                      { name: 'Abandoned Cart 30-Min Recovery Ping', trigger: 'Trigger: Checkout Incomplete', runs: '94 runs', status: 'RUNNING' },
                      { name: 'Low Inventory Alert to Merchant', trigger: 'Trigger: Stock < 5 items', runs: '12 runs', status: 'RUNNING' },
                      { name: 'COD Verification & Address Confirm Call', trigger: 'Trigger: COD Order Selected', runs: '67 runs', status: 'RUNNING' }
                    ].map((w, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: '#F8FAFC',
                          borderRadius: '12px',
                          border: '1px solid #E2E8F0',
                          padding: '12px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}
                      >
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '13px', fontWeight: 700, color: '#08084F' }}>
                            {w.name}
                          </div>
                          <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', color: '#64748B' }}>
                            {w.trigger}
                          </div>
                        </div>
                        <div style={{ fontFamily: 'abc-favorit, sans-serif', fontSize: '11px', color: '#94A3B8', marginRight: '8px' }}>
                          {w.runs}
                        </div>
                        <span style={{
                          fontFamily: 'abc-favorit, sans-serif',
                          fontSize: '10px',
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: '100px',
                          background: '#ECFDF5',
                          color: '#047857',
                          border: '1px solid rgba(16,185,129,0.3)'
                        }}>{w.status}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: '16px',
                    padding: '14px 18px',
                    borderRadius: '14px',
                    background: '#FAF5FF',
                    border: '1px solid #E9D5FF',
                    fontFamily: 'abc-favorit, sans-serif',
                    fontSize: '13px',
                    color: '#08084F',
                    lineHeight: 1.6
                  }}>
                    <strong>Automated Workflows:</strong> GST invoices, payment receipts, inventory sync, and order dispatch alerts run automatically behind the scenes for ₹1/Day.
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 990px) {
          .cd-main-grid {
            grid-template-columns: 1fr !important;
          }
          .cd-kpi-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .cd-split-hero {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
