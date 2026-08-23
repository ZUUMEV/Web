'use client'

import { useState, useMemo } from 'react'
import { TrendingUp, PiggyBank, Calendar, Zap } from 'lucide-react'

export function ProfitCalculator() {
  const [dailyKm, setDailyKm] = useState(100)
  const [daysPerMonth, setDaysPerMonth] = useState(26)
  const [petrolPrice, setPetrolPrice] = useState(100.82)
  const [mileage, setMileage] = useState(45)

  const calculations = useMemo(() => {
    const monthlyKm = dailyKm * daysPerMonth

    // Petrol scooter costs (real-world, all-inclusive)
    const petrolFuel = (monthlyKm / mileage) * petrolPrice
    const petrolEmi = 3321 // ₹1L loan, 12%, 3 years
    const petrolMaintenance = 1842 // service + tyres + wear & tear
    const petrolInsurance = 450 // insurance + GPS + accessories amortized
    const petrolRoadExpenses = 400
    const petrolMonthly = petrolFuel + petrolEmi + petrolMaintenance + petrolInsurance + petrolRoadExpenses

    // ZUUM EV costs
    const evRental = 6000
    const evFuel = 0 // free charging
    const evMaintenance = 0
    const evInsurance = 0
    const evRoadExpenses = 200
    const evMonthly = evRental + evFuel + evMaintenance + evInsurance + evRoadExpenses

    // Savings
    const monthlySavings = petrolMonthly - evMonthly
    const yearlySavings = monthlySavings * 12
    const threeYearSavings = monthlySavings * 36
    const fiveYearSavings = monthlySavings * 60

    return {
      monthlyKm,
      petrolFuel: Math.round(petrolFuel),
      petrolMonthly: Math.round(petrolMonthly),
      evMonthly: Math.round(evMonthly),
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      threeYearSavings: Math.round(threeYearSavings),
      fiveYearSavings: Math.round(fiveYearSavings),
    }
  }, [dailyKm, daysPerMonth, petrolPrice, mileage])

  return (
    <div className="rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold sm:text-2xl">Calculate Your Savings</h2>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Adjust the values below to see your real savings by switching from petrol scooter to ZUUM EV rental.
      </p>

      {/* Input controls */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="dailyKm" className="block text-sm font-medium text-foreground">
            Daily ride distance: <span className="text-primary font-bold">{dailyKm} km</span>
          </label>
          <input
            id="dailyKm"
            type="range"
            min="40"
            max="150"
            step="10"
            value={dailyKm}
            onChange={(e) => setDailyKm(Number(e.target.value))}
            className="mt-2 w-full accent-primary"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>40 km</span>
            <span>150 km</span>
          </div>
        </div>

        <div>
          <label htmlFor="daysPerMonth" className="block text-sm font-medium text-foreground">
            Working days per month: <span className="text-primary font-bold">{daysPerMonth} days</span>
          </label>
          <input
            id="daysPerMonth"
            type="range"
            min="10"
            max="30"
            step="1"
            value={daysPerMonth}
            onChange={(e) => setDaysPerMonth(Number(e.target.value))}
            className="mt-2 w-full accent-primary"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>10 days</span>
            <span>30 days</span>
          </div>
        </div>

        <div>
          <label htmlFor="petrolPrice" className="block text-sm font-medium text-foreground">
            Petrol price (₹/liter)
          </label>
          <input
            id="petrolPrice"
            type="number"
            min="80"
            max="150"
            step="0.01"
            value={petrolPrice}
            onChange={(e) => setPetrolPrice(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="mileage" className="block text-sm font-medium text-foreground">
            Petrol scooter mileage (kmpl)
          </label>
          <input
            id="mileage"
            type="number"
            min="30"
            max="80"
            step="1"
            value={mileage}
            onChange={(e) => setMileage(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {/* Petrol cost card */}
        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⛽</span>
            <h3 className="font-semibold text-foreground">Petrol Scooter (Own)</h3>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Monthly cost (all-inclusive)</p>
          <p className="mt-1 text-3xl font-bold text-red-600">
            ₹{calculations.petrolMonthly.toLocaleString('en-IN')}
          </p>
          <div className="mt-3 space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between"><span>Fuel</span><span>₹{calculations.petrolFuel.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between"><span>EMI (3-yr loan)</span><span>₹3,321</span></div>
            <div className="flex justify-between"><span>Maintenance</span><span>₹1,842</span></div>
            <div className="flex justify-between"><span>Insurance + accessories</span><span>₹450</span></div>
            <div className="flex justify-between"><span>Road expenses</span><span>₹400</span></div>
          </div>
        </div>

        {/* EV cost card */}
        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-foreground">ZUUM EV (Rent)</h3>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Monthly cost (all-inclusive)</p>
          <p className="mt-1 text-3xl font-bold text-green-600">
            ₹{calculations.evMonthly.toLocaleString('en-IN')}
          </p>
          <div className="mt-3 space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between"><span>Monthly rental</span><span>₹6,000</span></div>
            <div className="flex justify-between"><span>Fuel (charging)</span><span className="text-green-600">FREE</span></div>
            <div className="flex justify-between"><span>Maintenance</span><span className="text-green-600">FREE</span></div>
            <div className="flex justify-between"><span>Insurance</span><span className="text-green-600">Included</span></div>
            <div className="flex justify-between"><span>Road expenses</span><span>₹200</span></div>
          </div>
        </div>
      </div>

      {/* Savings summary */}
      <div className="mt-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-cyan-400/10 p-6">
        <div className="flex items-center gap-2">
          <PiggyBank className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">Your Savings with ZUUM EV</h3>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              Monthly
            </div>
            <p className="mt-1 text-xl font-bold text-primary sm:text-2xl">
              ₹{(calculations.monthlySavings / 1000).toFixed(1)}k
            </p>
            <p className="text-xs text-muted-foreground">₹{calculations.monthlySavings.toLocaleString('en-IN')}</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              Yearly
            </div>
            <p className="mt-1 text-xl font-bold text-primary sm:text-2xl">
              ₹{(calculations.yearlySavings / 1000).toFixed(0)}k
            </p>
            <p className="text-xs text-muted-foreground">₹{calculations.yearlySavings.toLocaleString('en-IN')}</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              3 Years
            </div>
            <p className="mt-1 text-xl font-bold text-primary sm:text-2xl">
              ₹{(calculations.threeYearSavings / 100000).toFixed(2)}L
            </p>
            <p className="text-xs text-muted-foreground">₹{calculations.threeYearSavings.toLocaleString('en-IN')}</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              5 Years
            </div>
            <p className="mt-1 text-xl font-bold text-primary sm:text-2xl">
              ₹{(calculations.fiveYearSavings / 100000).toFixed(2)}L
            </p>
            <p className="text-xs text-muted-foreground">₹{calculations.fiveYearSavings.toLocaleString('en-IN')}</p>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Based on {calculations.monthlyKm.toLocaleString('en-IN')} km/month usage. Even after 3 years when you would &ldquo;own&rdquo; a petrol scooter, you save <strong className="text-primary">₹{(calculations.threeYearSavings / 100000).toFixed(2)} lakh</strong> by renting.
        </p>
      </div>
    </div>
  )
}
