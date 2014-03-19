describe('myObj', function() {
    it('one', function() {
        sinon.spy(myObj, 'one');
        expect(myObj.one()).to.equal(1);
        myObj.one.should.have.been.calledOnce; // should usage
        expect(myObj.one.calledOnce).to.be.ok; // expect usage
    })

    it('two', function() {
        expect(myObj.two()).to.equal(2)
    })
});