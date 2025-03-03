import Link from "next/link";

export default function Home() {
    return (
        <div style={{ textAlign: "center", padding: "50px 20px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
                <span style={{ color: "orange" }}>In</span>surance, <span style={{ color: "orange" }}>simplified</span>
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "40px", color: "#ddd" }}>
                Find the best auto insurance rates, optimized by AI.
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
                <label style={{ fontSize: "1.2rem" }}>
                    <input type="checkbox" id="home" name="insuranceType" value="home" /> Home
                </label>
                <label style={{ fontSize: "1.2rem" }}>
                    <input type="checkbox" id="auto" name="insuranceType" value="auto" /> Auto
                </label>
            </div>
            
            <input 
                type="text" 
                placeholder="Enter Postal Code" 
                style={{ padding: "12px", borderRadius: "5px", width: "250px", textAlign: "center", fontSize: "1rem", border: "1px solid #ccc", marginBottom: "20px" }}
            />
            
            <br />
            
            <Link href="/get-a-quote">
                <button className="button" style={{ padding: "12px 25px", fontSize: "1.2rem", borderRadius: "8px", cursor: "pointer", backgroundColor: "orange", color: "white", border: "none", transition: "all 0.3s" }}>
                    Start
                </button>
            </Link>
            
            <div style={{ marginTop: "60px", textAlign: "left", maxWidth: "600px", padding: "20px", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.1)", boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)" }}>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "15px", color: "#fff" }}>How It Works</h2>
                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: "1.5rem", color: "orange", marginRight: "10px" }}>1.</span>
                    <p style={{ fontSize: "1.1rem", color: "#ddd" }}><strong>Enter Your Details:</strong> Provide your postal code and select the type of insurance you need.</p>
                </div>
                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: "1.5rem", color: "orange", marginRight: "10px" }}>2.</span>
                    <p style={{ fontSize: "1.1rem", color: "#ddd" }}><strong>AI Comparison:</strong> Our AI scans multiple insurers to find the best rates for your situation.</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: "1.5rem", color: "orange", marginRight: "10px" }}>3.</span>
                    <p style={{ fontSize: "1.1rem", color: "#ddd" }}><strong>Get Your Quote:</strong> Receive an optimized insurance quote tailored to your needs.</p>
                </div>
            </div>
        </div>
    );
}