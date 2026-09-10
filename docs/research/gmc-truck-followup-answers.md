# Follow-up answers — GMC truck equipment list

Answers to the six technical questions on the approved truck-bed layout.

---

## 1. Hot water — is cold-water Kränzle intentional?

**Yes — intentional for exterior wash.**

- The **Kränzle K1622TS is a cold-water machine** (inlet water up to ~140°F max if preheated elsewhere, but it has **no onboard heater**).
- For **paint-safe mobile detailing**, cold/ambient water + proper chemistry (foam, APC) is the pro standard. Hot exterior wash is usually for engines, bugs, or fleet grease — not daily clear-coat work.
- **Hot water on this rig already exists where it matters:** the **Mytee Lite 8070** has a **1,000W inline heater** for carpets/upholstery.

**If you still want hot exterior washes later**, options are:
- Small **on-demand diesel/propane water heater** plumbed ahead of the washer (adds weight, fuel, complexity, and can void some washer warranties if too hot), or
- Separate **hot-water pressure washer** (much heavier / higher power — not recommended for this GMC bed).

**Recommendation:** keep exterior cold; use Mytee heat for interiors. Skip onboard exterior heater unless you have a specific hot-wash service menu.

---

## 2. Greywater / reclaim — missing tank?

**Not missing from the Blueshine-style design — exterior runoff is the default.**

| Water | Where it goes on this layout |
|-------|------------------------------|
| Fresh wash water | 100-gal tank → Kränzle / rinse reel |
| Interior extract water | **Mytee’s own 4-gal recovery tank** only |
| Exterior soap/rinse | **Runs off the driveway** (or street, per local rules) |

Most US mobile detailers on residential jobs **do not carry a greywater reclaim tank** unless:
- City/HOA **requires** reclaim, or
- They’re working over storm drains with enforcement.

**If you need reclaim later**, add:
- Ground mat / vacuum recovery system, **or**
- Separate **greywater tank** (often 50–100 gal) + vacuum recovery wand — that eats bed space and payload fast.

**Recommendation:** start with runoff + biodegradable soaps; add reclaim only if your market requires it.

---

## 3. Water flow — SHURflo 2088 vs Kränzle draw

**Flow rate is fine; plumbing role needs a correction.**

| Device | Flow |
|--------|------|
| Kränzle K1622TS draw | **~1.7 GPM** |
| SHURflo 2088 | **~3.0–3.5 GPM** open flow |

So the pump **can** out-supply the washer (no starvation **if** plumbing is correct).

**But:** Kränzle/Dirt Killer guidance for tank hookup is:
- The **K1622TS can self-prime / pull from a tank without a booster pump**
- Prefer a **short, dedicated, air-tight suction line** from tank → washer
- A pressurized feed pump into the inlet is **usually unnecessary** and can cause issues if mis-plumbed

**Better use of the SHURflo on this truck:**
1. **Low-pressure rinse / DI rinse reel** (second Coxreel), and/or  
2. Tank transfer / fill assist, and/or  
3. Chemical dilution lines  

**Not required** as a mandatory booster into the Kränzle if the tank feed line is short and sealed.

**Cavitation risk** comes from air leaks, long skinny hose, or empty tank — not from the SHURflo being “too weak.” At 1.7 GPM demand, 3+ GPM pump capacity is not the bottleneck.

---

## 4. Payload / weight — rough total

**100 gal water alone ≈ 834–835 lb.** That’s the elephant in the bed.

### Rough wet weight estimate (full tank)

| Item | Approx. weight |
|------|----------------|
| Water (100 gal) | **835 lb** |
| PE tank (empty) | 40–60 lb |
| Champion ~4500W gen | 100–120 lb |
| Kränzle K1622TS | ~42–55 lb |
| Mytee Lite 8070 | ~48–65 lb |
| 2× Coxreels + hoses | 40–70 lb |
| Diamond plate / frame / racks | 150–300 lb |
| Chemicals, tools, towels, chest | 80–150 lb |
| **Estimated total (wet)** | **~1,350–1,650 lb** |

### Does it fit a GMC?

Depends on **your door-jamb payload sticker**, not the brochure max.

- Many **Sierra 1500 Crew Cab** payloads land ~**1,700–2,000 lb**
- Loaded trims / AT4X can drop toward **~1,350–1,600 lb**
- Payload must also cover **passengers + fuel + hitch gear**

**Math check:** wet build ~1,450 lb average + 2 people (~350 lb) ≈ **1,800 lb** → tight or over on many trucks.

**Safer options if payload is tight:**
- Drop to a **65-gal** low-profile tank (~540 lb water), or  
- Run the 100-gal **partially filled** (e.g. 60–70 gal day load), or  
- Move generator to a lighter unit / leave non-daily tools at home  

**Action needed from you:** send the **payload number on the driver’s door sticker** + exact truck trim.

---

## 5. Bed size assumption

**Layout was drawn for a GMC crew-cab short/standard bed — not a long 8' bed.**

Assumptions baked into the vision:
- **Most likely fit:** **6'6" (standard) bed** with comfortable walk space  
- **Tight but doable:** **5'8" (short) bed** if tank is low-profile against the cab and reels are vertical near the tailgate  
- **Easiest:** **8' bed** (rare on crew cabs)

Key dimension: Detail King–style **100-gal tank ~38.5" L × 26.5" W × 25" H** — that block alone eats a big chunk of a 5'8" bed.

**Action needed from you:** confirm **bed length** (5'8" / 6'6" / 8') and **cab type**.

---

## 6. Power draw — can Champion 4500W run everything together?

**No — run sequentially, not all at once. Also: generator sizing needs an upgrade.**

### Approx. electrical loads (120V)

| Tool | Draw | Notes |
|------|------|-------|
| Kränzle K1622TS | **15A ≈ 1,650–1,800W** running | Startup surge higher |
| Mytee Lite 8070 (vac + pump + heater) | **19A ≈ 2,185W** | Needs ~20A circuit |
| RUPES LHR15 | ~**500–700W** | Light load |

### Why the listed Champion 4500W inverter is problematic

- Nameplate **4500 starting / ~3500 running** watts  
- Kränzle USA / Dirt Killer recommend **≥ 4,800 running watts** for K1622TS (formula: amps × volts × 3)  
- They also advise: **Kränzle alone on the generator** — no other tools sharing  
- Many manufacturers **discourage inverter gens** for these washers (surge behavior)

### Correct operating plan

| Mode | What runs |
|------|-----------|
| Exterior wash | Generator → **Kränzle only** |
| Interior extract | Generator → **Mytee only** (heater on if power allows) |
| Polish / ceramic | Generator → **RUPES + SCANGRIP** (easy), or house outlet if available |

**Never:** Kränzle + Mytee together on a 3500–4500W class gen.

### Recommended equipment change

Upgrade power to something like:
- **~5,500–7,000W conventional (non-eco-mode) generator**, **or**
- Dual-inverter parallel kit rated for continuous tool loads (only if verified for Kränzle surge)

Update the buy list: treat **Champion 4500W inverter as undersized** for Kränzle-only best practice.

---

## Summary decisions

| Question | Verdict |
|----------|---------|
| Hot water | Keep exterior **cold**; Mytee covers hot interior |
| Greywater | **Runoff by default**; reclaim only if required |
| SHURflo vs Kränzle | Flow OK; prefer **tank suction to Kränzle**, SHURflo for **rinse reel** |
| Payload | **~1,350–1,650 lb wet** — verify door sticker; consider 65-gal if tight |
| Bed size | Assumed **crew cab 5'8"–6'6"** — confirm yours |
| Power | **Sequential only**; upgrade past 4500W inverter for Kränzle |

---

## Need from you to finalize the build

1. Exact **GMC year / trim / 2WD or 4WD**  
2. **Door-sticker payload (lb)**  
3. **Bed length** (5'8" / 6'6" / 8')  
4. Any **city reclaim / greywater rules** where you’ll work?  
5. Confirm: keep **cold exterior**, or force an **on-demand heater** into v2?
